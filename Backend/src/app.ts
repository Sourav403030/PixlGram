import express from "express"
import { authRouter } from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import { postRouter } from "./routes/postRoutes";
import { userRouter } from "./routes/userRoutes";

export const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);