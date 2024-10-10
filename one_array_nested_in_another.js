function isArrayInAnother(mainArray1, mainArray2) {
    var count = 0;
    for (var i = 0; i < mainArray1.length; i++) {
        for (var j = 0; j < mainArray1.length; j++) {
            if (mainArray1[i] === mainArray2[j]) {
                count += 1;
            }
        }
        if (count == mainArray2.length) {
            return true;
        }
    }
    return false;
}
console.log(isArrayInAnother([1, 2, 3, 4], [0, 6]));
console.log(isArrayInAnother([3, 1], [4, 0]));
console.log(isArrayInAnother([9, 9, 8], [8, 9]));
console.log(isArrayInAnother([1, 2, 3, 4], [2, 3]));
