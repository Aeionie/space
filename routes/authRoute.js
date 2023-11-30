import express from "express"
import { signin, signup } from "../controllers/authController.js"

const router=express.Router()

//SIGN IN
router.post("/signin", signin)

//SIGN UP
router.post("/signup", signup)

export default router