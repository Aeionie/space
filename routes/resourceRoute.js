import express from "express"
import { createResource, getResourcesByCategory, getResourcesWithUserId, searchForResources } from "../controllers/resourceController.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router=express.Router()

router.post("/",verifyToken,createResource)

router.get("/",getResourcesByCategory)

router.get("/user/:id", verifyToken,getResourcesWithUserId)

router.get("/search",searchForResources)

export default router