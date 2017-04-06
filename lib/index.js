/**
 * Created by djavrell on 21/02/2017.
 */


// node module require
const path = require('path');

// own modules require
const utils = require('./utils');
const pathFromRoot = utils.pathFromRoot;
const storesModels = require('./functors').storesModels;
const load = require('./config/').load;

// variables
const orm = require('waterline')();


function filler(loc) {
  const config = load.loadConfigFile(loc);
  const collections = require(pathFromRoot(config.modelsDir));
  const config_waterline = require(pathFromRoot(config.configFile)).DBconfig;

  const todo = config.data;
  const getModels = storesModels(collections);
  const toUse = getModels(todo.use);

  for (let k in toUse) {
    if (toUse.hasOwnProperty(k)) {
      orm.loadCollection(toUse[k]);
    }
  }

  if (!config.configFile) {
    console.error('no waterline config found');
    return;
  }

  // orm.initialize(config_waterline, server);
}

function server(err, models) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('orm init completed');
}

module.exports = filler;
