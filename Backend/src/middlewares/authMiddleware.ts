import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Token invalid, Unauthorized access",
    });
  }

  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return res.status(400).json({
      message: "JWT secret is required",
    });
  }

  const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & {
    id: string,
    username: string,
  };

  if (!decoded) {
    return res.status(401).json({
      message: "Invalid Token, Unauthorized access",
    });
  }

  req.user = decoded;
  next();

}
