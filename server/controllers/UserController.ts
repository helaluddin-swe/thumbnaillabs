
import { Request,Response } from "express"
import Thumbnail from "../models/Thumbnail.js"
export const getUserThumbnail=async(req:Request,res:Response)=>{
    try {
        const {userId}=req.session
        const thumbnail=await Thumbnail.find({userId}).sort({createdAt:-1})
        res.json({thumbnail})
    } catch (error:any) {
        res.status(500).json({message:error.message})
        
    }

}

// single
export const getThumbnailById=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const {userId}=req.session
        const thumbnail=await Thumbnail.findOne({userId,_id:id})
        res.json({thumbnail})
        
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}