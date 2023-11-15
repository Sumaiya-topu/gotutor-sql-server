import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.get('/', PostController.getAllPosts)
router.get('/:id', PostController.getPostByID)
router.post('/create', PostController.createPost)
export const PostRoutes =  router;