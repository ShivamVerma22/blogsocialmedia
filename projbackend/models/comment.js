const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        blog: {
            type: mongoose.Types.ObjectId,
            ref: 'Blog'
        },
        comment: {
            type: String
        },
        time: {
            type: Date
        }
    }
)