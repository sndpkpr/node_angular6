const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staticTemplatesSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

const users = mongoose.model('staticTemplates', staticTemplatesSchema);
module.exports = users;