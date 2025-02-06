const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const JWT_SECRET="AMITYADAV";
app.use(express.json());

const users=[];
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"u re signup"
    })
})

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    let foundUsers=null;
for(let i=0;i<users.length;i++){
    if(users[i].username == username  && users[i].password == password){
        foundUsers=users[i];
    }
}
if(foundUsers){
    const token=jwt.sign({
        username:username
    },JWT_SECRET);
    res.json({
        token:token,
        message:"you are signin."
    })
}
else{
    res.status(403).send({
        message:'Invalid username or password.'
    })
}
})

app.get("/me",(req,res)=>{
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    const username=decodedInformation.username;

    let foundUsers=null;
for(let i=0;i<users.length;i++){
   if(users[i].username == username){
       foundUsers=users[i];
   }
} 
if(foundUsers){
        res.json({
            username:foundUsers.username,
            password:foundUsers.password
    })
}
else{
    res.json({
        message:"sorry user is not found (token invalid )!"
    })
}
})
app.listen(3000);