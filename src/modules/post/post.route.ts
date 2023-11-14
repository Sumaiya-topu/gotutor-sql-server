import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.post('/create', PostController.createPost)
export const PostRoutes =  router;