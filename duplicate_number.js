var Input = require('prompt-sync')();
var get_input = Input("Enter the number: ");
console.log(typeof (get_input));
var duplicateElement = get_input.split('').map(Number);
console.log(duplicateElement);
var filterElements = duplicateElement.filter(function (element, index) {
    return duplicateElement.indexOf(element) == index;
});
console.log("The Original Elements are ", filterElements);
