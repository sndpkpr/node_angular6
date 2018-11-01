const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tokensSchema = new mongoose.Schema({
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

const users = mongoose.model('tokens', tokensSchema);
module.exports = users;