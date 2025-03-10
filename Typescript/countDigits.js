/*
Given a number n, the task is to return the count of digits in this number.

Input: n = 1567
Output: 4
Explanation: There are 4 digits in 1567, which are 1, 5, 6 and 7.

Input: n = 255
Output: 3
Explanation: The are 3 digits in 256, which are 2, 5 and 5.


Input: n = 58964
Output: 5
Explanation: There are 5 digits in 58964, which are 5, 8, 9, 6 and 4.
*/
var countDigits = function (data) {
    var toString = String(data);
    var digitsArray = toString.split('').join(',');
    console.log("there are ".concat(toString.length, " digits, which are ").concat(digitsArray));
};
countDigits(1234);
