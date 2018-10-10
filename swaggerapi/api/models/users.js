const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    dob: { type: Date},
    password: { type: String },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles',
        required: true
    },
    active: {type: Boolean, default: false},
    deleted: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    profileImage: {type: String},
    phone: {type: Number},
    is_loggedin:{type: Boolean},
    token : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tokens'
    },
    skills: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'skills'
    }],
    location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userLocations'
    },
    businessDetail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'businesses'
    },
    stripDetail : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'stripeDetails'
    },
    bio : { type: String }
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

const users = mongoose.model('users', userSchema);
module.exports = users;