var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventKeywordsSchema = new mongoose.Schema({
    name : { 
        type : String,
        required : true
    },
    description : {
        type: String 
    },
}, { timestamps: true });

var users = mongoose.model('eventKeywords', eventKeywordsSchema);
module.exports = users;