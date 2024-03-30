const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



exports.getquestions=async(req,res)=>{
    const data=req.body;

const result=await prisma.questions.findMany({
    where: {
        
            userid: data.userid,
            Chatno: data.Chatno
        
    }
});
res.send(result)
}

exports.getallquestions=async(req,res)=>{
  const data=req.body;
const result=await prisma.questions.findMany({
  where: {
      
          userid: data.userid
      
  }
});
res.send(result)
}

exports.addquestions=async(req,res)=>{
    const data=req.body;
    
        
           const result=await prisma.questions.create({
                data:{
                    question:data.question,
                    answer:"The genereated answer will come here",
                    Chatno:data.Chatno,
                    userid:data.userid,
                    response:data.response

                }
            });
            res.send(result);
        
}

exports.createnewchat= async(req,res)=>{
    const data=req.body;
    const createchat=await prisma.chats.create({
       data:{
        userid:data.userid
       }
    })
    res.send(createchat);
}


