import express from "express"
import authMiddleware from "../middlewares/authMiddleware";
import { followUserController } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.post("/follow/:username", authMiddleware, followUserController);