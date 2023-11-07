import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main(){
//  const getAllUsers = await prisma.user.findMany()
//  console.log(getAllUsers);
 
//create data
const postUser = await prisma.user.create({
    data:{
        email:'sumaiya@gmail.com',
        name:'Sumaiya',
        phone:"1789543"
    }
})

}

main();