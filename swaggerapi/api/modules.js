var normalizedPath = require("path").join(__dirname, "models");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var name = file.replace('.js', '');
    module.exports[name] = require('./models/' + file);
  }
});