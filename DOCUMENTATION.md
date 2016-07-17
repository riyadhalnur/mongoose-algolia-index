# mongoose-algolia-plugin

Indexes a document on save. Checks to see if
 already indexed to Algolia. If not, carries out an update operation
 to sync with Algolia. Adds two fields to document - alIndexed and objectID.

**Parameters**

-   `schema` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The Mongoose schema
-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options object to configure plugin
    -   `options.index` **\[[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Index the plugin fields on MongoDB
    -   `options.schemaName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the Mongoose schema to index
    -   `options.applicationId` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Alogolia Application ID
    -   `options.apiKey` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Alogila API Key

Returns **func** Callback
