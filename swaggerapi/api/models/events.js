var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventsSchema = new mongoose.Schema({
    eventName: {
        type: String
    },
    banner: {
        type: String
    },
    eventCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'eventCategories'
    },
    location: {
        lat: { type: String },
        long: { type: String },
        name: { type: String }
    },
    keywords: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'eventKeywords'
    },
    PaidOrFree: { 
        type: String,
        enum : ['Paid','Free'],
        default: 'Free'
    },
    cost: {
        start: { type: String },
        end: { type: String },
    },
    url: {
        type: String
    },
    datePresent: {
        type: Boolean, default: false
    },
    date: {
        start: { type: Date },
        end: { type: Date },
    },
    timePresent: {
        type: Boolean, default: false
    },
    time: {
        start: { type: Date },
        end: { type: Date },
    },
    desc: {
        type: String
    },
    visibility: {
        type: String,
        enum : ['Public','Group'],
        default: 'Public'
    },
    groups: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'groups'
    }],
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

var users = mongoose.model('events', eventsSchema);
module.exports = users;