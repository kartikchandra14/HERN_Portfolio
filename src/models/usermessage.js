const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type: 'String',
        minLength:3,
        required: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id");
            }

        }
    },
    message:{
        type: 'String',
        required: true
    },
    phone:{
        type: 'Number',
        min: 10,
        required: true
    },
    date: {
        type: 'Date',
        default: new Date(Date.now())
    }

}) 

// collection
const User = mongoose.model("User", userSchema);

module.exports = User

