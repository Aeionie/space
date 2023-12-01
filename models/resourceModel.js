import mongoose from "mongoose"

const resourceSchema= new mongoose.Schema({
    resourceUrl:{
        type:String,
        required:true
    },
    resourceName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    },
    privacy:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        require:true
    }
},{timestamps:true})

const resourceModel= mongoose.model("Resource",resourceSchema)

export default resourceModel