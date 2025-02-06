const fs=require('fs');

let data ="This is updated data..."
fs.writeFile('a.txt',data,function(){
console.log("data is updated")
});
