import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import resourceRoute from "./routes/resourceRoute.js"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
//import ejs from "ejs"



const app=express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())
//app.use('view engine',ejs)
app.use(fileUpload({ useTempFiles: true}));
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

app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/resources", resourceRoute)

app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Something went wrong!"

    return res.status(status).json({
        successful:false,
        status,
        message
    })
})