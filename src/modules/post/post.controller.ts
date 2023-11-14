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

export const PostController={
    createPost
}