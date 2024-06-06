import jwt from "jsonwebtoken";
import { findByUsername } from "../services/User.js";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await findByUsername(decoded.username);
        next();
    } catch (error) {
        res.status(401).json({ message: error.name });
    }
}