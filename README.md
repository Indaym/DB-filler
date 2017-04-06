# DB-Filler

## How to use

#### Instal

> npm i --save-dev Indaym/DB-filler

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
