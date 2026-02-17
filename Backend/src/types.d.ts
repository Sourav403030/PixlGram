import { JwtPayload } from "jsonwebtoken";

// Extend the Express Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & { id: string };
    }
  }
}

// This export is needed to make this file a module
export {};
