var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var groupMappersSchema = new mongoose.Schema({
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

var users = mongoose.model('groupMappers', groupMappersSchema);
module.exports = users;