'use strict';

const mongoose = require('bluebird').promisifyAll(require('mongoose'));
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    contact: Number,
    address: Object
},{
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);