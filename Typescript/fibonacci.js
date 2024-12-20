var promt = require('prompt-sync')();
var getInput = promt("Enter the number ");
var num = parseInt(getInput);
var sumOfElement = [0, 1];
for (var i = 2; i < num; i++) {
    sumOfElement.push(sumOfElement[i - 2] + sumOfElement[i - 1]);
}
console.log(sumOfElement);
