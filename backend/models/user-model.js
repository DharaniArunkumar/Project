const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    activationCode: { type: String, require: true, default: null },
    isActivated: { type: Boolean, require: true, default: false }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel