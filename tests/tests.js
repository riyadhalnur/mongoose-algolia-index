'use strict';

const chai = require('chai');
const mongoose = require('mongoose');
const algolia = require('algoliasearch');
const fixtures = require('pow-mongoose-fixtures');
const sinon = require('sinon');

const should = chai.should();

describe('Mongoose Algolia Indexing Plugin', () => {
  let dbInstance;

  before((done) => {
    require(__dirname + '/models/Test.js');
    mongoose.connect('mongodb://localhost/algolia-plugin-test');

    dbInstance = mongoose.connection;
    dbInstance.on('error', console.error.bind(console, 'Connection Error')); // eslint-disable-line

    sinon.stub(algolia, 'initIndex').withArgs('Test');
    sinon.stub(algolia, 'addObject');
    sinon.stub(algolia, 'saveObject');

    fixtures.load(__dirname + '/fixtures/Test.js', dbInstance, done);
  });

  after((done) => {
    dbInstance.db.dropCollection('tests', (err, result) => { // eslint-disable-line
      dbInstance.close(done);
    });
  });

  it('should have 2 fields added to document', (done) => {
    let Test = dbInstance.model('Test');

    Test.find({ name: 'Test 1' }, (err, item) => {
      should.not.exist(err);

      item[0].alIndexed.should.exist;
      done();
    });
  });
});
