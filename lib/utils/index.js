const path = require('path');

module.exports = {
  home: process.env.HOME || process.env.HOMEPATH,
  pathFromRoot: loc => path.join(path.resolve('.', loc)).normalize(),
};
