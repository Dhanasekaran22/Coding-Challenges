function doubleExists(elements) {
    var inputNumber = elements.sort(function (a, b) { return a - b; });
    console.log(inputNumber);
    var count = 0;
    for (var _i = 0, inputNumber_1 = inputNumber; _i < inputNumber_1.length; _i++) {
        var element = inputNumber_1[_i];
        if (inputNumber.indexOf(0, 1) != inputNumber.indexOf(element)) {
            return true;
        }
        else if (inputNumber.includes(element + element) && element != 0) {
            return true;
        }
    }
    return false;
}
console.log(doubleExists([2, 5, 3, 0]));
console.log(doubleExists([10, 2, 5, 3, 0]));
console.log(doubleExists([3, 1, 7, 11, 0, 0]));
