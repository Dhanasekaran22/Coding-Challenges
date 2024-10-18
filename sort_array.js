//Write a function that takes two sorted arrays and returns a single sorted array.(Merge Two Sorted Arrays)
var mergeSortedArray = function (array1, array2) {
    var sortArray1 = array1.sort();
    var sortArray2 = array2.sort();
    for (var i = 0; i < array2.length; i++) {
        sortArray1.push(sortArray2[i]);
    }
    var mergeSortArray = sortArray1.sort();
    return mergeSortArray;
};
console.log(mergeSortedArray([3, 2, 1, 5], [4, 7, 8, 6]));
