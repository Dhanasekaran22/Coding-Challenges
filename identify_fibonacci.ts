const promtt = require('prompt-sync')();
var getInput = promtt("Enter the number to check fibonacci ");


let sumOfElements: number[] = [0, 1];

for (let i = 2; i < getInput.length; i++) {
    sumOfElements.push(sumOfElements[i - 2] + sumOfElements[i - 1])
}

console.log(sumOfElements);

for(let i=0;i<getInput.length;i++){
if (sumOfElements.indexOf(getInput[i]) == 1) {
    console.log("The given sequence is fibonacci");
}
else {
    console.log("The given sequence is not fibonacci");
    break;
}
}

