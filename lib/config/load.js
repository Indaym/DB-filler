const fs = require('fs');
const path = require('path');

function loadConfigFile(loc) {
  const final_path = path.join(path.resolve('.'), loc).normalize();

  return JSON.parse(fs.readFileSync(final_path, 'utf8'));
}

module.exports = {
  loadConfigFile,
};
