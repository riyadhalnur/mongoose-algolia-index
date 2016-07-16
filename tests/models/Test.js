'use strict';

const mongoose = require('mongoose');
const algoliaPlugin = require('../../src/mongoose-algolia-plugin.js');

let TestSchema = new mongoose.Schema({
  name: String
});

TestSchema.plugin(algoliaPlugin, { index: true, schemaName: 'Test' });

mongoose.model('Test', TestSchema);
