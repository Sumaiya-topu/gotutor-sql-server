import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res:Response)=>{
    try{
        const result = await PostService.createPost(req.body);
        res.send({
            success: true,
            message: "Post Created successfully",
            data: result
        })
    }catch(err){
        console.log(err);
    }
}

const getAllPosts = async(req:Request,res:Response)=>{
    const options = req.query;
    try{
        const result = await PostService.getAllPosts(options);
         res.send({
            success: true,
            message: "Post Created successfully",
            data: result
        })
    }catch(err){
        console.log(err);
    }
}

const getPostByID= async(req:Request, res:Response)=>{
    try{
        const result = await PostService.getPostByID(parseInt(req.params.id));
         res.send({
            success: true,
            message: "Data fetched successfully!",
            data:result
        })
    }
    catch(err){
        console.log(err);
    }
}

export const PostController={
    createPost,
    getAllPosts,
    getPostByID
}