import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ErrorWithStatus from "../error-with-status.js";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// middleware che verifica la correttezza del token
const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers["authorization"];
    // auth header = "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxx"

    if (!authHeader) {
      throw new ErrorWithStatus(401, "Accesso negato");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);

    // se il token è corretto, salvo dentro req.user la decodifica del token
    req.user = decoded;

    next();
  } catch (error) {
    throw new ErrorWithStatus(401, "Accesso negato");
  }
};

export default verifyToken;
