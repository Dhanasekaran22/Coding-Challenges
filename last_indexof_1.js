// const str=require(`prompt-sync`)();
// const numb=str("Enter the number: ");
// let searchElement=1;
// let indexOfOne=0;
// let getNum:number[]=numb.split("");
// console.log(getNum);
// for(let i=0;i<str.length;i++){
//     if(getNum[i]==searchElement){
//          indexOfOne=numb.indexOf("1");
//     }
// }
// console.log(getNum.indexOf(1));
var prom = require('prompt-sync')();
var numb = prom("Enter the number: ");
var searchElement = "1"; // Search for the string "1"
var lastIndex = -1; // Initialize lastIndex to -1 to indicate not found
// Convert the input number to an array of digits (as strings)
var getNum = numb.split("");
console.log(getNum);
// Loop through the array to find the last occurrence of "1"
for (var i = 0; i < getNum.length; i++) {
    if (getNum[i] === searchElement) {
        lastIndex = i; // Update lastIndex whenever "1" is found
    }
}
console.log(lastIndex);
