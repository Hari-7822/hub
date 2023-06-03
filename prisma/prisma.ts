import { PrismaClient } from "@prisma/client";

declare global {

    namespace NodeJs{
        interface Global{}
    }
}

interface CustomNodeJsGlobal extends NodeJs.Global {
    prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient();


if(process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma


// import { PrismaClient } from "@prisma/client";

// const pr = new PrismaClient();

// const main = async() => {
//     const user = await pr.client.findFirst({
//         where: {
//             email: "zoro@email.com",
//             password: "enma"

//         }
//     })

//     console.log(user);

// }  

// main()
//     .then( async() => {
//         await pr.$disconnect()
//     })
//     .catch(async (e) => {console.log(e)
//     await pr.$disconnect()
//     process.exit(1)
// })