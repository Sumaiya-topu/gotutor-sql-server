import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello prisma");
})

router.post('/create-user', UserController.insertIntoDB)

export const UserRoutes = router;
