import express from "express"
import { getMeController, loginController, registerUserController, verifyController } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";

export const authRouter = express.Router();

authRouter.post("/register", registerUserController);
authRouter.post("/verify/:email", verifyController);
authRouter.post("/login", loginController);
authRouter.get("/get-me", authMiddleware, getMeController);