const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupMappersSchema = new mongoose.Schema({
    groupId : { 
        type: mongoose.Schema.Types.ObjectId,
		ref: 'groups'
    },
    userId : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
    isDeleted : {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const users = mongoose.model('groupMappers', groupMappersSchema);
module.exports = users;