import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();



router.get('/get-users',UserController.getUsers)
router.post('/create-user', UserController.insertIntoDB)
router.post('/profile', UserController.insertOrUpdateProfile )

export const UserRoutes = router;
