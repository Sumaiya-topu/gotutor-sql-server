import { PrismaClient, post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async(data: post): Promise<post>=>{
    const result = await prisma.post.create({
        data
    })
    return result;
}

const getAllPosts= async()=>{
    const result = await prisma.post.findMany({
        include : {
            author: true
        }
    });
    return result;
}

const getPostByID = async(id:number)=>{
    const result = await prisma.post.findUnique({
        where:{
            id
        },
        include:{
            author:true
        }
    });
    return result;
}

export const PostService={
    createPost,
    getAllPosts,
    getPostByID
}