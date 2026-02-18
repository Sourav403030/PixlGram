import { Request, Response } from "express";
import { userModel } from "../models/userModel";
import { followModel } from "../models/followModel";

export async function followUserController(req: Request, res: Response){
    const followerUsername = req.user?.username;
    const followeeUsername = Array.isArray(req.params.username) ? req.params.username[0] : req.params.username;

    if(!followeeUsername || !followerUsername){
        return res.status(401).json({
            message: "Follower and Followee is required"
        })
    }

    if(followeeUsername === followerUsername){
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({follower: followerUsername, followee: followeeUsername});

    if(isAlreadyFollowing){
        return res.status(400).json({
            message: `You are already following ${followeeUsername}`
        })
    }

    const isFolloweeExists = await userModel.findOne({username: followeeUsername});

    if(!isFolloweeExists){
        return res.status(400).json({
            message: "The user you are trying to follow doesnot exist"
        })
    }

    const follow = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
    })

    return res.status(201).json({
        message: `You have followed ${followeeUsername} successfully`,
        follow: follow
    })

}

export async function unfollowUserController(req: Request, res: Response){
    const unfollowUser = Array.isArray(req.params.username) ? req.params.username[0] : req.params.username;
    const user = req.user?.username;

    if(unfollowUser == user){
        return res.status(400).json({
            message: "You cannot unfollow yourself"
        })
    }

    if(!unfollowUser){
        return res.status(400).json({
            message: "username to be unfollowed is required"
        })
    }

    const isFollowAlreadyExists = await followModel.findOne({follower: user, followee: unfollowUser});

    if(!isFollowAlreadyExists){
        return res.status(400).json({
            message: `You are not following ${unfollowUser}`
        })
    }

    await followModel.findOneAndDelete({follower: user, followee: unfollowUser});

    res.status(201).json({
        message: `You unfollowed ${unfollowUser} successfully`
    })
}