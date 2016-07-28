[![Build Status](https://travis-ci.org/riyadhalnur/mongoose-algolia-index.svg?branch=master)](https://travis-ci.org/riyadhalnur/mongoose-algolia-index) [![Coverage Status](https://coveralls.io/repos/github/riyadhalnur/mongoose-algolia-index/badge.svg?branch=master)](https://coveralls.io/github/riyadhalnur/mongoose-algolia-index?branch=master)
[![Build status](https://ci.appveyor.com/api/projects/status/7xge8bgxxgvuxc62/branch/master?svg=true)](https://ci.appveyor.com/project/riyadhalnur/mongoose-algolia-index/branch/master) [![Dependency Status](https://dependencyci.com/github/riyadhalnur/mongoose-algolia-index/badge)](https://dependencyci.com/github/riyadhalnur/mongoose-algolia-index) [![Inline docs](http://inch-ci.org/github/riyadhalnur/mongoose-algolia-index.svg?branch=master)](http://inch-ci.org/github/riyadhalnur/mongoose-algolia-index)    

mongoose-algolia-index
======================

[![Join the chat at https://gitter.im/riyadhalnur/mongoose-algolia-index](https://badges.gitter.im/riyadhalnur/mongoose-algolia-index.svg)](https://gitter.im/riyadhalnur/mongoose-algolia-index?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Mongoose plugin to automatically index newly created documents for Algolia.  

**NOTE: This project is in BETA. It is not properly ready for production use yet. The API is subject to change as we get closer to releasing the stable version (1.0.0).**

### Installation  
`npm install mongoose-algolia-index --save`  

### Usage  
```js
const mongoose = require('mongoose');
const algoliaPlugin = require('mongoose-algolia-index');

let TestSchema = new mongoose.Schema({
  name: String
});

TestSchema.plugin(algoliaPlugin, {
  index: true,
  schemaName: 'Test',
  applicationId: '<your-application-id>',
  apiKey: '<your-api-key>'
});

mongoose.model('Test', TestSchema);
```

### Documentation
Read the documentation in [DOCUMENTATION](DOCUMENTATION.md).  

### Contributing
Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.  

### License  
Licensed under MIT. See [LICENSE](LICENSE) for more information.  

### Issues  
Report a bug in issues.   

Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://verticalaxisbd.com)
