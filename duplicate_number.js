var Input = require('prompt-sync')();
var get_input = Input("Enter the number: ");
var duplicateElement = [];
for (var i = 0; i < get_input.length; i++) {
    duplicateElement.push(get_input[i]);
}
var filterElements = duplicateElement.filter(function (num) {
    return num % 2 == 0;
});
console.log(filterElements);
