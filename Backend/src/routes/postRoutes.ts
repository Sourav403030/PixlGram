import express from "express"
import { createPostController, getPostController, getPostDetailsController } from "../controllers/postController";
import upload from "../middleware/multerConfig";

export const postRouter = express.Router();

postRouter.post("/", upload.single("image") , createPostController);
postRouter.get("/", getPostController);
postRouter.get("/details/:postId", getPostDetailsController);