import { createError } from "../middleware/error.js"
import userModel from "../models/userModel.js"


export const updateProfile=async(req,res,next)=>{
    const userId=req.user.id
    console.log(req.body)
    console.log(req.params.id)
    if(userId===req.params.id){
        try {
            const user= await userModel.findById(userId)
            const updatedUser= await userModel.findByIdAndUpdate(userId,{
                $set:req.body
            },{new:true})
            console.log(user)
            res.status(200).json(updatedUser)
        } catch (error) {
            next(err)
        }
    }else{
        next(createError(403,"You can only edit your profile!"))
    }
}