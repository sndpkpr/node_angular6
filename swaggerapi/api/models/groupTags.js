const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupTagsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, { timestamps: true });

const users = mongoose.model('groupTags', groupTagsSchema);
module.exports = users;