import jwt from "jsonwebtoken"
import { createError } from "./error.js"


export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token) return next(createError(403,"You are not authenticated!"))

    jwt.verify(token,process.env.JWT_TOKEN,(err,decoded)=>{
        if(err) return next( createError(403,"You are not autheticated"))

        req.user=decoded
        next()
    })
}