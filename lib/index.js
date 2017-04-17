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

const fill = require('./fill');

// variables
const orm = require('waterline')();

/**
 * store all information about the data we put in the DB
 */
let todo = {};

function filler(loc) {
  const config = load.loadConfigFile(loc);
  const collections = require(pathFromRoot(config.modelsDir));
  const config_waterline = require(pathFromRoot(config.configFile)).DBconfig;

  todo = config.data;

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

  orm.initialize(config_waterline, server);
  return;
}

function server(err, models) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('orm init completed');
  fill(todo.content, models.collections);
}

module.exports = filler;
