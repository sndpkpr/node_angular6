const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const privateMessagesSchema = new mongoose.Schema({
    fromUserid : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
    toUserId : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
    message: { type: String },
    IsDeleted: { type : Boolean, default : true },
    IsRemoved: { type : Boolean },
    // modifiedOn: [{
    //     lastBody: { type: String },
    //     datedOn: { type: Date, default: Date.now }
    // }] 
}, { timestamps: true });

const users = mongoose.model('privateMessages', privateMessagesSchema);
module.exports = users;