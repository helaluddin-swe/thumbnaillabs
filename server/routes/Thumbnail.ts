import express from "express"
import { deleteThumbnail, generateThumbnail } from "../controllers/ThumbanilController.js"
const ThumbailRouter=express.Router()
ThumbailRouter.post("/generate",generateThumbnail)
ThumbailRouter.delete("/delete/:id",deleteThumbnail)
export default ThumbailRouter