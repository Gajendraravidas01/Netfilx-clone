import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        max : 50,
        unique : true
    },
    likedMovies : Array,
})

export const User = mongoose.model("User",UserSchema)