import express from "express"
import { loadAuthPage, signin, signup } from "../controllers/authController.js"

const router=express.Router()

//LOAD AUTH PAGE
router.get("/", loadAuthPage)

//SIGN IN
router.post("/signin", signin)

//SIGN UP
router.post("/signup", signup)

export default router