const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rolesSchema = new mongoose.Schema({
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

const users = mongoose.model('roles', rolesSchema);
module.exports = users;