
const { type } = require('os');
const { boolean } = require('webidl-conversions');
const mongoose = require('../config/database.js');
const Schema = mongoose.Schema;

const TaskChema = new Schema({
    macaddress: {type: String, required: true },
    type: {type: Number, required: true},
    title: {type: string, required: true },
    description: {type: string, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()}
    
})
module.exports = mongoose.model('task', TaskChema);