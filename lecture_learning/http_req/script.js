const express = require("express");
const app = express();

// function loggerMiddleware(req,res,next){
//   console.log("method is :",req.method);
//   console.log("method is :",req.hostname);
//   console.log(new Date());
// next();
// }

app.use(express.json()); // middle ware inbuilt in express..
app.get("/sum", function(req, res) {
  requestIncrease();
  const a= parseInt(req.query.a);
  const b =parseInt (req.query.b);
  res.json({
      ans: a + b
  })

});


// app.get("/divide", function(req, res) {
//   requestIncrease();
//   const a=req.query.a;
//   const b = req.query.b;
//   res.json({
//       ans: a / b
//   })

// });

// app.get("/subtract", function(req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   res.json({
//       ans: a - b
//   })
// });
// app.get("/multiply", function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   res.json({
//     ans:a * b
//   })
// });
app.listen(3000);
