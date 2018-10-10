var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tokensSchema = new mongoose.Schema({
    tokenString: {
        type: String,
        required: true
    },
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: true
    // },
    loggedOut : {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

var users = mongoose.model('tokens', tokensSchema);
module.exports = users;