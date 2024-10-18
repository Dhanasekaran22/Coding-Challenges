//Create a function that takes an integer as an argument and returns 'even' if the number is even and 'odd' if it's odd.
var getInputFromUser = require('prompt-sync')();
var promptTogetInput = getInputFromUser("Enter the Number : ");
var toNumber = parseInt(promptTogetInput);
function toFindOddorEven(element) {
    if (element % 2 == 0) {
        console.log("Even");
    }
    else if (element % 2 != 0) {
        console.log("Odd");
    }
}
toFindOddorEven(toNumber);
