import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        trim: true,
        lowercase: true

    },

    lastName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        trim: true,
        lowercase: true,

    },

    age:{
        type: Number,
        min: 18, 
        required: true,
    },

    emailId: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        minLength: 6,
        maxLength: 20,

    },

    gender: {
        type: String,
        required: true,
        validate(value){
            if(!['male','female','others'].includes(value)){
                throw new Error("You could be a male or female or others")
            }
        }
    },

    photoURL: {
        type: String,
        default: 'https://placehold.co/300'
    },

    about: {
        type: String,
        default: 'Hi!, I am using Social'
    }




},{timestamps: true})

export const User = mongoose.model('User', userSchema)