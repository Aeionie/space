import express from "express"
import { createResource, getAllResources, getResourcesByCategory, getResourcesWithUserId, searchForResources } from "../controllers/resourceController.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router=express.Router()

router.post("/",verifyToken,createResource)

router.get("/category",getResourcesByCategory)
router.get("/",getAllResources)

router.get("/user/:id", verifyToken,getResourcesWithUserId)

router.get("/search",searchForResources)

export default router