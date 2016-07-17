'use strict';

const algolia = require('algoliasearch');
const mongoose = require('mongoose');

/**
 *  Indexes a document on save. Checks to see if
 *  already indexed to Algolia. If not, carries out an update operation
 *  to sync with Algolia. Adds two fields to document - alIndexed and objectID.
 *
 *  @param  {Object} schema - The Mongoose schema
 *  @param  {Object} options - Options object to configure plugin
 *  @param  {boolean=} options.index - Index the plugin fields on MongoDB
 *  @param  {string} options.schemaName - Name of the Mongoose schema to index
 *  @param  {string} options.applicationId - Alogolia Application ID
 *  @param  {string} options.apiKey - Alogila API Key
 *  @return {func} - Callback
 */
module.exports = (schema, options) => {
  schema.add({ alIndexed: Boolean });
  schema.add({ objectID: String });

  schema.pre('save', function (next) {
    if (!this.alIndexed) {
      this.alIndexed = false;
    }

    if (!this.objectID) {
      this.objectID = '';
    }

    next();
  });

  if (options && options.index) {
    schema.path('alIndexed').index(options.index);
    schema.path('objectID').index(options.index);
  }

  schema.post('save', (doc, next) => {
    const index = algolia(options.applicationId, options.apiKey).initIndex(options.schemaName);

    mongoose.model(options.schemaName).find({ _id: doc._id }, (err, item) => {
      if (err) {
        return next(err);
      }

      let data = item[0];

      if (data.alIndexed && data.objectID.length > 0) {
        return index.saveObject(data, next);
      }

      index.addObject(data, data.id, (indexErr, content) => {
        if (indexErr) {
          return next(indexErr);
        }

        data.alIndexed = true;
        data.objectID = content.objectID;
        data.save();

        return next();
      });
    });
  });
};
