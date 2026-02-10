import mongoose from "mongoose";
import * as z from "zod"

interface userSchemaInterface{
    username: string
    email: string
    password: string
    bio: string
    profileImage: string
    otp: number
    isVerified: boolean
}

const userSchema = new mongoose.Schema<userSchemaInterface>({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profileImage:{
        type: String,
        default: "https://ik.imagekit.io/qvrrmlp7a/default-profile-img.webp"
    },
    bio: String,
    otp: Number,
    isVerified: Boolean,
},{timestamps: true})

export const userSchemaValidation: z.ZodObject = z.object({
    username: z.string(),
    email: z.email(),
    password: z.string(),
    profileImage: z.string(),
    bio: z.string(),
})