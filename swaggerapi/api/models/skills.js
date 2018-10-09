var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, { timestamps: true });

var users = mongoose.model('skills', skillsSchema);
module.exports = users;