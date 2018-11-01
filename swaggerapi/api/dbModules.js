const modelPath = require("path").join(__dirname, "models");

require("fs").readdirSync(modelPath).forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    const name = file.replace('.js', '');
    module.exports[name] = require('./models/' + file);
  }
});
