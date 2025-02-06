// code a counter in Javascript
// using setTimeout

let counter=0;
function main(){
    console.clear();
    counter++;
    console.log(counter);
    setTimeout(main,1000);
};
main()
