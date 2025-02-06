
const express=require('express');
const app=express();

// app.get("/add",()=>{
//     const  a=req.query.a;
//     const b=req.query.b;
//     return a+b

// })
// app.get("/subtract/:first/:second",()=>{
// const first=first.req.params.first;
// const second=second.req.params.second;
// return first-second;
// })


//middlewares
// app.use((res,req,next)=>{

//     // work to done by middlewares

//     next();
//     // next functionnis called if function(midddlewares) conditon is true
//     // not calling next() to cancel the request or terminate the request..
// })



//app.use(sum) => this line is used to call the middleware in all the routes after this lines this is allso called global middleware 
function sum(req, res,next){
    console.log("request received");
    next();
}
// app.use(express.json()); this is used to pass the  json  data in body ..

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
app.listen(3000);