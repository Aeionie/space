import express from "express"
import { loadAuthPage, signin, signout, signup } from "../controllers/authController.js"

const router=express.Router()

//LOAD AUTH PAGE
router.get("/", loadAuthPage)

//SIGN IN
router.post("/signin", signin)

//SIGN UP
router.post("/signup", signup)

//SIGN OUT
router.post("/signout",signout)

export default router