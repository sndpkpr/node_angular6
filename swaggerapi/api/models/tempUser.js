var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var favorite = require('./favourites')
var tempUserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailRegister: { type: String },
    dob: { type: Date },
    password: { type: String },
    active: {type: Boolean, default: false},
    deleted: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    profileImage: {type: String},
    phone: {type: Number},
    token : {
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tokens'
        }
    },
    skills: [{
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'skills'
        }
    }],
    location: {
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userLocations'
        }
    },
    businessDetail: {
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'businesses'
        }
    },
    stripDetail : {
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'stripeDetails'
        }
    }
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

var users = mongoose.model('tempUsers', tempUserSchema);
module.exports = users;