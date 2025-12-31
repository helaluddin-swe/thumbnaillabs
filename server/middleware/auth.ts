import {Request,NextFunction,Response} from "express"
const protect=async(req:Request,res:Response,next:NextFunction)=>{
const {isLoggedIn,userId}=req.body
if(!isLoggedIn || !userId){
    return res.status(401).json({message:"You are not logged in"})
}
next()
}
export default protect