import { PrismaClient } from '@prisma/client'

// prismaClient usado para manipulação de models no banco
const prismaClient = new PrismaClient();

export default prismaClient;