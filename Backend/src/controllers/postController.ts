import { Request , Response } from "express";
import uploadFileToImageKit from "../services/imageKitService";
import jwt from "jsonwebtoken";
import { postModel } from "../models/postModel";

export async function createPostController(req: Request, res: Response){
    if(!req.file || !req.body){
        return res.status(400).json({
            message: "File and Caption is required",
        })
    }

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Token not found, Unauthorized access"
        })
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    
    if(!JWT_SECRET){
        return res.status(400).json({
            message: "JWT secret is required",
        })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & { id: string };

    const uploadResponse = await uploadFileToImageKit(req.file.buffer, req.file.originalname);

    const newPost = await postModel.create({
        caption: req.body.caption,
        imgUrl: uploadResponse.url,
        userId: decoded.id
    } as any)

    return res.status(201).json({
        message: "New post created successfully",
        newPost
    })

    

    
}

export async function getPostController(req: Request, res: Response){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Token invalid, Unauthorized access"
        })
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    
    if(!JWT_SECRET){
        return res.status(400).json({
            message: "JWT secret is required",
        })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & { id: string };;

    if(!decoded){
        return res.status(401).json({
            message: "Invalid Token, Unauthorized access"
        })
    }

    const userId = decoded.id;

    const posts = await postModel.find({userId: userId} as any)

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

}

export async function getPostDetailsController(req: Request, res: Response){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    
    if(!JWT_SECRET){
        return res.status(400).json({
            message: "JWT secret is required",
        })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

    if(!decoded){
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }

    const userId = decoded.id;
    const postId = req.params.postId;

    const post = await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: "No posts found"
        })
    }

    const isValidUserAccessingPost = post?.userId.toString() === userId;

    if(!isValidUserAccessingPost){
        return res.status(403).json({
            message: "Forbidden content"
        })
    }

    return res.status(200).json({
        message: "Post fetched successfully",
        post
    })




}