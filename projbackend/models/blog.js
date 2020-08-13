const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
    {
        heading: {
            type: String,
            require: true,
            trim: true
        },
        subHeading: {
            type: String,
            require: true,
            trime: true
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category'
        },
        content: {
            type: String,
            require: true
        },
        readtime: {
            type: Number
        },
        readBy: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
        likedBy: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
        dislikedBy: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
        comments: [{
            type: mongoose.Types.ObjectId,
            ref: 'Comment'
        }],
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        creationTime: {
            type: Date
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema)