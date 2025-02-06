const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRETE="iamamit";
app.use(express.json());

const users=[];
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username,
        password
    })

    res.json({
    message:'you are signin.'
    })
})
app.post("/signin",(req,res)=>{

})
app.post("/home",(req,res)=>{
    res.sendFile(__dirname+"/home_page/index.html");

})
