import express from "express"
import { authRouter } from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import { postRouter } from "./routes/postRoutes";
import { userRouter } from "./routes/userRoutes";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);