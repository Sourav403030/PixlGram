import express from "express"
import { authRouter } from "./routes/authRoutes";
import cookieParser from "cookie-parser";

export const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);