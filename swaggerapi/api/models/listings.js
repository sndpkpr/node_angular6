const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingsSchema = new mongoose.Schema({
    title: { type: String },
    visiblity: { 
        type: String,
        enum : ['Public','Private', 'Group'],
        default: 'Group'
    },
    disc: { type: String },
    location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'locations'
    },
    skills: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'skills'
    }],
    groups: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'groups'
    }],
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

const users = mongoose.model('listings', listingsSchema);
module.exports = users;