var Input = require('prompt-sync')();
var get_input = Input("Enter the number: ");
var duplicateElement = [];
for (var i = 0; i < get_input.length; i++) {
    duplicateElement.push(get_input[i]);
}
var filterElements = duplicateElement.filter(function (element, index) {
    return duplicateElement.indexOf(element) == index;
});
console.log("The Original Elements are ", filterElements.join(" "));
