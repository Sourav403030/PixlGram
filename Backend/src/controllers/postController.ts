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

    const uploadResponse = await uploadFileToImageKit(req.file.buffer, req.file.originalname);

    const newPost = await postModel.create({
        caption: req.body.caption,
        imgUrl: uploadResponse.url,
        userId: req.user?.id,
    } as any)

    return res.status(201).json({
        message: "New post created successfully",
        newPost
    })
    
}

export async function getPostController(req: Request, res: Response){


    const userId = req.user?.id;

    const posts = await postModel.find({userId: userId} as any)

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

}

export async function getPostDetailsController(req: Request, res: Response){
    const userId = req.user?.id;
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