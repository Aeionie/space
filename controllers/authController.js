import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { createError } from "../middleware/error.js"


export const loadAuthPage=async(req,res)=>{
    res.render("form.ejs")
}

export const signin=async(req,res,next)=>{
    const {email}=req.body
    try {
        const foundUser= await userModel.findOne({email})
        console.log(foundUser)
        if(!foundUser) return next(createError(404, "User not found!"))
        const isCorrect=bcrypt.compare(req.body.password, foundUser.password)
        console.log(foundUser.password)
    
        if(!isCorrect) return next(createError(404,"Incorrect Password"))
    
        const token= jwt.sign({id:foundUser._id},process.env.JWT_TOKEN)

        const {password,...others}=foundUser._doc

        res.cookie("access_token",token,{
            httpOnly:true
        }).json(others)
        
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
        }).json(others)
        
    } catch (err) {
        next(createError(err))
        
        
    }
}