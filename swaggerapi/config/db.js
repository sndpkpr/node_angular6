'use strict';

var mongoose = require('mongoose');
/* DB */

mongoose.connect("mongodb://localhost:27017/hycarebrid"); //local
// mongoose.connect('mongodb://hycarebrid:hycarebrid@192.168.0.5:27017/hycarebrid',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function() {
    console.log("Database conencted successfullyyy!");
});
