import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async(data : User): Promise<User>=>{
    const result = await prisma.user.create({
        data
    })
    return result ;
}

const insertOrUpdateProfile = async(data:Profile):Promise<Profile> =>{
    const isExist = await prisma.profile.findUnique({
        where:{
            user_id: data.user_id
        }
    })
    if(isExist){
        const result = await prisma.profile.update({
            where:{
                user_id: data.user_id
            },
            data:{
                department: data.department,
                institution:data.institution,
                backgroundMedium:data.backgroundMedium,
                address:data.address,
                gender:data.gender
            }
        })
        return result
    }
    const result = await prisma.profile.create({data})
    return result; 
}

const getUsers = async ()=>{
    const result = await prisma.user.findMany();
    return result;
}

 export const UserService ={
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers
 }