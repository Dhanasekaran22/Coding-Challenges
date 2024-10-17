var Input = require('prompt-sync')();
var get_input = Input("Enter the number: ");
var duplicateElement = get_input.split('').map(Number);
console.log("The Input Elements are ", duplicateElement);
var filterElements = duplicateElement.filter(function (element, index) {
    return duplicateElement.indexOf(element) == index;
});
console.log("The Original Elements are ", filterElements);
