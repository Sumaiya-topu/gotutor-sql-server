import { PrismaClient } from "@prisma/client";
import express, { Application } from 'express';
import cors from 'cors';

const app:Application = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


const prisma = new PrismaClient();
const port = process.env.PORT || 3003
async function  main(){
app.listen(port,()=>{
console.log(`Server is running at ${port}`);
})

}

main();