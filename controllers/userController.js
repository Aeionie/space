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

const followSomeone=async(req,res,next)=>{
    const userId=req.user.id
    const userToFollowId=req.params.id

    try {
        const user= await userModel.findById(userId)
        if(user.following.includes(req.params.id)){
            await userModel.findByIdAndUpdate(userId,{
                $pull:{following:req.params.id}
            })
            await userModel.findByIdAndUpdate(req.params.id,{
                $pull:{follower:req.user.id}
            })
            res.status(200).json("user has been unfollowed")
        }else{
            await userModel.findByIdAndUpdate(userId,{
                $push:{following:req.params.id}
            })
            await userModel.findByIdAndUpdate(req.params.id,{
                $push:{follower:req.user.id}
            })

            res.status(200).json("user has been followed!")

        }
    } catch (err) {
        next(err)
    }
}