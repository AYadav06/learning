// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs =require('fs')
function cleanFile(fileName,cb){
    //read a file 

    fs.readFile(fileName,'utf-8',function(err,data){
        data=data.trim();
        
      // write the file 
        fs.writeFile(fileName,data,function(){
       cb();
     });
    });
}
function callback(){
    console.log("file is cleaned..");
}
cleanFile('a.txt',callback);



// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }

// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);

