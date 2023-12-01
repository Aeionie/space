import express from "express"
import { updateProfile } from "../controllers/userController.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router=express.Router()

router.put("/:id",verifyToken,updateProfile)


export default router