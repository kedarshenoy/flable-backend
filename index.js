// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// deleteAllQuestions = async () => {
//     try {
//       // Delete all records from the questions table
//       await prisma.questions.deleteMany();
  
//       // Send a success message
//       console.log({ message: "All questions deleted successfully." });
//     } catch (error) {
//       // Handle errors
//       console.error("Error deleting questions:", error);
//     }
//   };
//   deleteAllQuestions()
// const createUser=async()=>{
//    const res=await prisma.user.create({
//         data:{
//             username:"Kedar",
//             password:"password",
//             firstName:"kedar",
//             lastName:"shenoy"
//         }
//     });
//     console.log(res);
// }
const express =require('express')
const Routes = require('./Routes/index')
const app =express();
const port =5402
const bodyParser =require("body-parser")
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/',Routes);

  app.listen(port,()=>{
    console.log(`apps runing on port ${port} `);
})