const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventKeywordsSchema = new mongoose.Schema({
    name : { 
        type : String,
        required : true
    },
    description : {
        type: String 
    },
}, { timestamps: true });

const users = mongoose.model('eventKeywords', eventKeywordsSchema);
module.exports = users;