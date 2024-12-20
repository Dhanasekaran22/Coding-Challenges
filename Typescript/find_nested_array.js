function isNestedArray(mainArray) {
    for (var _i = 0, mainArray_1 = mainArray; _i < mainArray_1.length; _i++) {
        var iterateArray = mainArray_1[_i];
        if (Array.isArray(iterateArray)) {
            return true;
        }
        // else{
        //     return false;
        // }
    }
    return false;
}
console.log(isNestedArray([1, 2, 3, 4, [5, 6]]));
console.log(isNestedArray([2, 3, 4, 5]));
