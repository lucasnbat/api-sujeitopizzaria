import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string, //é o sub lá com o id do user
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    try {
        // aqui tá usando destructuring para pegar o id do user (que tá no sub)
        // o verify decripta o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload //significa que vai devolver objeto com formato da interface Payload

        // guarda id do user numa var do req
        req.user_id = sub;
        
    } catch (error) {
        return res.status(401).end();
    }

    return next();
}