const promt = require('prompt-sync')();
var getInput = promt("Enter the number ");
var num: number = parseInt(getInput);

let sumOfElement: number[] = [0, 1];
for (let i = 2; i < num; i++) {

    sumOfElement.push(sumOfElement[i-2]+sumOfElement[i-1]);

}

console.log(sumOfElement);
