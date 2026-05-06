const mongoose = require('mongoose');

const UserSignUpSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Mobile:{
        type: Number,
        required: true,
        unique: true
    },
    Gender:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('UserSignUp', UserSignUpSchema);
