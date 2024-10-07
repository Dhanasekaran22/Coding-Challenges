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


const prom = require('prompt-sync')();
const numb = prom("Enter the number: ");

let searchElement = "1"; 
let lastIndex = -1; 


let getNum: string[] = numb.split("");
for (let i = 0; i < getNum.length; i++) {
    if (getNum[i] === searchElement) {
        lastIndex = i; 
    }
}

console.log(lastIndex);