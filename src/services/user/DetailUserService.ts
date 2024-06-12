import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {

        // user se refere ao model user
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id, // id é o atributo da model user la no schema
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { DetailUserService }