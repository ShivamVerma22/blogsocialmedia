const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            maxlength: 32
        },
        lastname: {
            type: String,
            trim: true,
            maxlength: 32
        },
        email: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            trim: true,
            require: true
        },
        username: {
            type: String,
            unique: true,
            require: true
        },
        pimage: {
            type: String
        },
        desc: {
            type: String
        },
        blogs: [{
            type: mongoose.Types.ObjectId,
            ref: 'Blog'
        }]
    },
    { timestamps: true }
)


    module.exports = mongoose.model('User', UserSchema)