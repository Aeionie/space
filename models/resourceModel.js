import mongoose from "mongoose"

const resourceSchema= new mongoose.Schema({
    resourceUrl:{
        type:String,
        required:true
    },
    courseCode:{
        type:String,
        required:true
    },
    department:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
},{timestamps:true})

const resourceModel= mongoose.model("Resource",resourceSchema)

export default resourceModel