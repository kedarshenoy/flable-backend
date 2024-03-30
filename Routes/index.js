const express =require('express');
const Routes = express.Router();
const Questions =require('../Controlers/questions')
Routes.get('/',(req,res)=>{res.send("hello routes working")});
Routes.get('/questions',Questions.getquestions);
Routes.get('/allquestions',Questions.getallquestions);


Routes.post('/addquestions',Questions.addquestions);
Routes.post('/createnewchat',Questions.createnewchat);





module.exports=Routes;
