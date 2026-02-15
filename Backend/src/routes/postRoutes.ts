import express from "express"
import { createPostController, getPostController } from "../controllers/postController";
import upload from "../middleware/multerConfig";

export const postRouter = express.Router();

postRouter.post("/", upload.single("image") , createPostController);
postRouter.get("/", getPostController);