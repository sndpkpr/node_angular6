var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var groupTagsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, { timestamps: true });

var users = mongoose.model('groupTags', groupTagsSchema);
module.exports = users;