var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventMappersSchema = new mongoose.Schema({
    eventId : {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'events'
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

var users = mongoose.model('eventMappers', eventMappersSchema);
module.exports = users;