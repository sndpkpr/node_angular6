const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
        firstName: {
                type: String,
                required: true
        },
        lastName: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
                unique: true,
                validate: {
                        validator: function (v) {
                                return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(v);
                        },
                        message: props => `${props.value} is not a valid email!`
                },
        },
        dob: {
                type: Date
        },
        password: {
                type: String,
                required: true
        },
        role_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'roles',
                required: true
        },
        active: {
                type: Boolean, default: false
        },
        deleted: {
                type: Boolean, default: false
        },
        disabled: {
                type: Boolean, default: false
        },
        profileImage: {
                type: String
        },
        phone: {
                type: Number,
                lowercase: true,
                unique: true,
                validate: {
                        validator: function (v) {
                                return /\d{3}-\d{3}-\d{4}/.test(v);
                        },
                        message: props => `${props.value} is not a valid phone!`
                },
        },
        is_loggedin: {
                type: Boolean
        },
        token: {
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
        stripDetail: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'stripeDetails'
        },
        bio: { type: String }
        // modifiedOn: [{
        //     lastBody: { type: String },
        //     datedOn: { type: Date, default: Date.now }
        // }] 
}, { timestamps: true });

const users = mongoose.model('users', userSchema);
module.exports = users;
