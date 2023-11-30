import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { createError } from "../middleware/error.js"


export const signin=async(req,res,next)=>{
    const {email,password}=req.body
    console.log({email,password})
    try {
        const foundUser= await userModel.findOne({email})
        console.log(foundUser)
        if(!foundUser) return next(createError(404, "User not found!"))
        const isCorrect=bcrypt.compare(password, foundUser.password)
        console.log(foundUser.password)
    
        if(!isCorrect) return next(createError(404,"Incorrect Password"))
    
        const token= jwt.sign({id:foundUser._id},process.env.JWT_TOKEN)

        res.cookie("access_token",token,{
            httpOnly:true
        })
        
    } catch (err) {
        next(createError(err))
    }
}


export const signup=async(req,res,next)=>{
    const {name,username,email}=req.body

    try {
        const salt=bcrypt.genSaltSync(10)
        const hashPassword=bcrypt.hashSync(req.body.password, salt)
        const newUser= await userModel({
            name,
            username,
            email,
            password:hashPassword,
        })

        newUser.save()

        const {password, ...others}=newUser._doc
        
        const token= jwt.sign({id:others._id},process.env.JWT_TOKEN)

        console.log(token)

        res.cookie("access_token",token,{
            httpOnly:true
        })        
        
    } catch (err) {
        next(createError(err))
        
        
    }
}