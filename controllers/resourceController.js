import resourceModel from "../models/resourceModel"

export const  createResource=async(req,res,next)=>{
    try {
        const newResource= await resourceModel({userId:req.user.id,...req.body})
        await newResource.save()
        res.status(200).json(newResource)

    } catch (err) {
        next(err)
    }
}

export const getResourcesByDepartment=async(req,res)=>{
    const department= req.query.department
    try {
        const resources= await resourceModel.find({department})
        res.status(200).json(department)
    } catch (err) {
        next(err)
    }
}

export const getResourcesWithUserId= async(req,res)=>{
    try {
        const resources= await resourceModel.find({user:req.user.id})
    } catch (err) {
        next(err)
        
    }
}