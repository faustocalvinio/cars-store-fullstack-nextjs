import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export const verifyJWT = (token: string): JwtPayload | null => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
        return decoded;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};