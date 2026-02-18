import express from "express"
import authMiddleware from "../middlewares/authMiddleware";
import { followUserController, unfollowUserController } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.post("/follow/:username", authMiddleware, followUserController);
userRouter.delete("/unfollow/:username", authMiddleware, unfollowUserController);