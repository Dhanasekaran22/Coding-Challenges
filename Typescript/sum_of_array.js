//Write a function that takes an array of numbers and returns their sum.
var sumOfArray = function (element) {
    var sumArray = 0;
    for (var i = 0; i < element.length; i++) {
        sumArray += element[i];
    }
    return sumArray;
};
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));
