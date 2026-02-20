import express from "express"
import { loginController, registerUserController, verifyController } from "../controllers/authController";

export const authRouter = express.Router();

authRouter.post("/register", registerUserController);
authRouter.post("/verify/:email", verifyController);
authRouter.post("/login", loginController);