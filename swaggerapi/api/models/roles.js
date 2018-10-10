var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rolesSchema = new mongoose.Schema({
    roleName: { 
        type: String,
        enum : ['Admin','User'],
        default: 'User'
    },
    roleId: { 
        type: Number,
        enum : [ 1 , 2 ],
        default: 2
    },
    description: { type: String },
}, { timestamps: true });

var users = mongoose.model('roles', rolesSchema);
module.exports = users;