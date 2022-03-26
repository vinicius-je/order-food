const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {type: String, minlength: 6, maxlength: 100},
    password: {type: String, minlength: 6, maxlength: 200},
    admin: {type: Boolean, default: false},
    createDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('users', userSchema)