import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicUrl:{
        type:String,
        required:true,
        default:"https://res.cloudinary.com/djlvd6m7k/image/upload/v1697783978/starnode/hgaa6bwop01bwihwsr1k.jpg"
    },
    resourceUploaded:{
        type:[String]
    },
    follower:{
        type:[String]
    },
    following:{
        type:[String]
    },
    facebookUrl:{
        type:String
    },
    twitterUrl:{
        type:String
    },
    instagramUrl:{
        type:String
    },
},{timestamps:true})

const userModel= mongoose.model("User",userSchema)

export default userModel