'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/* DB */
// mongoose.connect("mongodb://localhost:27017/hycarebrid"); //local
mongoose.connect("mongodb://localhost/hycarebrid",{ useNewUrlParser: true }); //local
// mongoose.connect('mongodb://hycarebrid:hycarebrid@192.168.0.5:27017/hycarebrid',{ useNewUrlParser: true });
/* !DB */
mongoose.set('debug', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function() {
    console.log("Database conencted successfullyyy!");
});
