<a id="markdown-db-filler" name="db-filler"></a>
# DB-Filler

<!-- TOC -->

- [DB-Filler](#db-filler)
  - [How to use](#how-to-use)
      - [Instal](#instal)
        - [Folder structure](#folder-structure)
      - [filler.json](#fillerjson)
      - [Models folder](#models-folder)
      - [package.json](#packagejson)

<!-- /TOC -->

<a id="markdown-how-to-use" name="how-to-use"></a>
## How to use

<a id="markdown-instal" name="instal"></a>
#### Instal

> npm i --save-dev Indaym/DB-filler

<a id="markdown-folder-structure" name="folder-structure"></a>
##### Folder structure
```
app
|-- app.js
|-- package.json
|-- filler.json
|-- config
|   `-- config.js
|-- models
|   |-- index.js
|   |-- User.js
|   `-- ...

```

<a id="markdown-fillerjson" name="fillerjson"></a>
#### filler.json

```
{
  "modelsDir": "models",            // location of the models directory from the project root 
  "configFile": "config/config",    // location of the config file for waterline from the project root
  "data": {                         // data to load in your database
    "use": [ "User" ],              // list of models you're going to use
    "content": [
      { /* content here */ },
    ]
  }
}
```

<a id="markdown-models-folder" name="models-folder"></a>
#### Models folder

* index.js
```javascript
const User = require('./User');

module.exports = {
  User,
  // ...
};
```

* models file  (ex: User.js)
```javascript
const waterline = require('waterline');

module.exports = waterline.Collection.extend({
  /*
    waterline model definition
  */
});
```

<a id="markdown-packagejson" name="packagejson"></a>
#### package.json
```
{
  "scripts": {
    /* ... */
    "filler": "filler filler.json",   // 
    /* ... */
  },
  "dependencies": {
    /* ... */
    "filler": "^1.0.0",
    "waterline": "^0.11.11",
    /* ... */
  },
  /* ... */
}
```
