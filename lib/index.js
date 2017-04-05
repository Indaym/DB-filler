/**
 * Created by djavrell on 21/02/2017.
 */

const utils = require('./utils');
const path = require('path');
const load = require('./config/').load;
const orm = require('waterline')();

function filler(loc) {
  const config = load.loadConfigFile(loc);

  console.log(config);
  
  let mod = path.join(path.resolve('.'), config.modelsDir);
  console.log(`models => ${mod}`);
  const collections = require(mod);

  console.log(collections);
  for (let k in collections) {
    if (collections.hasOwnProperty(k)) {
      console.log(collections[k]);
    }
  }

  if (!config.configFile) {
    console.error('no waterline config found');
    return;
  }

  mod = path.join(path.resolve('.'), config.configFile);
  console.log(`config => ${mod}`);
  orm.initialize(mod.DBconfig, server);
}

function server(err, models) {
  if (err) {
    console.error(err);
    return;
  }
}

module.exports = filler;
