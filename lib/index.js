/**
 * Created by djavrell on 21/02/2017.
 */

const utils = require('./utils');
const load = require('./config/').load;

function filler(path) {
  const config = load.loadConfigFile(path);
}

module.exports = filler;
