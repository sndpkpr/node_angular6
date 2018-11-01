const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, { timestamps: true });

const users = mongoose.model('skills', skillsSchema);
module.exports = users;