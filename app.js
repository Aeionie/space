import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app=express()
dotenv.config()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

const PORT=process.env.PORT
const MONGODB_URI=process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log("Database is connected!")
    }).then(()=>{
        app.listen(PORT,()=>{
            console.log("server is online")
        })
    })

app.get("/",(req,res)=>{
    res.render("index.ejs")
})    