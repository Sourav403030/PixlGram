import mongoose from "mongoose";

interface followModelInterface{
    follower: string
    followee: string
}

const followSchema = new mongoose.Schema<followModelInterface>({
    follower: {
        type: String,
    },
    followee:{
        type: String,
    }
}, {timestamps: true})

followSchema.index({follower: 1, followee: 1}, {unique: true});

export const followModel = mongoose.model("follows", followSchema);