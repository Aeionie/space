import resourceModel from "../models/resourceModel.js"
import upload from "../middleware/cloudinary.js"

export const  createResource=async(req,res,next)=>{
    try {
        if (!req.files) return res.send('Please upload a document!');

        const {resource}= req.files



        const cloudFile = await upload(resource.tempFilePath);

        const newResource= await resourceModel({
            userId:req.user.id,
            resourceUrl:cloudFile.secure_url,
            resourceName:req.body.resourceName,
            category:req.body.category,
            privacy:req.body.privacy
        })

        await newResource.save()
        res.status(200).json(newResource)

    } catch (err) {
        console.log(err)
        next(err)
    }
}

export const getResourcesByCategory=async(req,res,next)=>{
    const category= req.query.category
    try {
        const resources= await resourceModel.find({category}).sort({createdAt:-1})
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
}

export const getResourcesWithUserId= async(req,res,next)=>{
    try {
        const resources= await resourceModel.find({userId:req.user.id})
        res.status(200).json(resources)

    } catch (err) {
        next(err)
        
    }
}

export const searchForResources= async(req,res,next)=>{
    try {
        const q=req.query.q
        const resources= await resourceModel.find({
            resourceName:{$regex:q, $options:"i"}
        }).limit(20)

        res.status(200).json(resources)
    } catch (err) {
        next(err)
        
    }
}