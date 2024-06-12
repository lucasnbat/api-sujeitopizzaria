import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string,
    password: string,
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        // verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            }
        })

        if (!user) {
            throw new Error('user/password incorrect');
        }

        // comparar com senha do banco para saber se senha inserida é correta
        // password = senha inserida x user.password = senha do banco
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('user/password incorrect');
        }

        // gerar token JWT e devolver dados do usuario (id, nome, email)
        /**
         * JWT = autenticação para APIRest, trancar rotas
         * email, senha -> gera JWT
         * JWT -> header, payload, assinatura(garantir autenticidade)
         */

        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        })

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token,
         }
    }
}

export { AuthUserService }