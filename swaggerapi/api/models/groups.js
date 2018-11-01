const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupsSchema = new mongoose.Schema({
    groupName: { type: String },
    image: { type: String },
    disc: { type: String },
    tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'groupTags'
    }],
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

const users = mongoose.model('groups', groupsSchema);
module.exports = users;