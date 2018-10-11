const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventMappersSchema = new mongoose.Schema({
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

const users = mongoose.model('eventMappers', eventMappersSchema);
module.exports = users;