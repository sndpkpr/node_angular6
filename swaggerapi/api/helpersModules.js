const helperPath = require("path").join(__dirname, "helpers");

require("fs").readdirSync(helperPath).forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    const name = file.replace('.js', '');
    module.exports[name] = require('./helpers/' + file);
  }
});
