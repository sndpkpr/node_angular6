var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stripeDetailsSchema = new mongoose.Schema({
    stripeEmail: {
        type: String,
        required: true
    },
    accoutKey: {
        type: String,
        required: true
    },
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

var users = mongoose.model('stripeDetails', stripeDetailsSchema);
module.exports = users;