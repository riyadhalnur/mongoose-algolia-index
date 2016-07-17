'use strict';

const mongoose = require('mongoose');
const algoliaPlugin = require('../../index.js');

let TestSchema = new mongoose.Schema({
  name: String
});

TestSchema.plugin(algoliaPlugin, {
  index: true,
  schemaName: 'Test',
  applicationId: 'myId',
  apiKey: 'myKey'
});

mongoose.model('Test', TestSchema);
