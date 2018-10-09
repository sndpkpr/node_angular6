const modelPath = require("path").join(__dirname, "models");

const helperPath = require("path").join(__dirname, "helpers");

require("fs").readdirSync(modelPath).forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var name = file.replace('.js', '');
    module.exports[name] = require('./models/' + file);
  }
});

require("fs").readdirSync(helperPath).forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var name = file.replace('.js', '');
    module.exports[name] = require('./helpers/' + file);
  }
});