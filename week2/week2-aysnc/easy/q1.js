// code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
 let counter=0;
function callback(){

console.log(counter);
counter++;
}
setInterval(callback,1000);