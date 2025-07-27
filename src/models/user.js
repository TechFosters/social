import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    age:{
        type: Number
    },

    emailId: {
        type: String
    },

    password: {
        type: String
    },

    gender: {
        type: String
    }

})

export const User = mongoose.model('User', userSchema)