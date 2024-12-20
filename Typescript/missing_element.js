//Write a function that finds the missing number in a given array of integers from 1 to n.
// var getPrompt = require('prompt-sync')();
// var getArray = getPrompt("Enter the Array Elements: ");
// var toNumberArray = getArray.split('').map(Number).sort();

var toFindMissingElement = function (NumberArray) {
    for (var i = 0; i < toNumberArray.length - 1; i++) {
        if (NumberArray[i + 1] - NumberArray[i] !== 1) {
            console.log(NumberArray[i] + 1);
        }
    }
};
toFindMissingElement([1,2,4,6]);
