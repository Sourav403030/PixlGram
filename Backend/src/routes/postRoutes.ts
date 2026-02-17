import express from "express"
import { createPostController, getPostController, getPostDetailsController } from "../controllers/postController";
import upload from "../middleware/multerConfig";
import authMiddleware from "../middlewares/authMiddleware";

export const postRouter = express.Router();

postRouter.post("/", upload.single("image") , authMiddleware ,createPostController);
postRouter.get("/", authMiddleware ,getPostController);
postRouter.get("/details/:postId", authMiddleware ,getPostDetailsController);