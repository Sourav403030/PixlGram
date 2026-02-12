import { Request , Response } from "express";
import uploadFileToImageKit from "../services/imageKitService";

export async function createPostController(req: Request, res: Response){
    if(!req.file || !req.body){
        return res.status(400).json({
            message: "File and Caption is required",
        })
    }
    const uploadResponse = await uploadFileToImageKit(req.file.buffer, req.file.originalname)

    res.status(201).json({
        message: "Image uploaded to ImageKit"
    })
}