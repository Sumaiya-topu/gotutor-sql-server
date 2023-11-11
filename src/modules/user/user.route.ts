import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello prisma");
})

export const UserRoutes = router;
