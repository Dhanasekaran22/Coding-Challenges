/*Given a number N, the task is to check first whether the given number is binary or not and 
its value should be greater than 1. print true if N is the binary representation else print false.

Input: N = 1010 
Output: true 
Explanation: 
Given number is greater than 1 and none of its digits is greater than 1. Thus, it is a binary number greater than 1.


Examples: N = 1234 
Output: false 
Explanation: 
Given number is greater than 1 but some of its digits { 2, 3, 4} are greater than 1. Thus, it is not a binary number. 
*/

const checkBinary = (data: number) => {
    if (data <= 1)
        return false;

    while (data > 0) {
        let temp = data % 10;
        if (temp > 1) {
            return false;
        }
        else {
            // console.log(data);
            // console.log(data/10);

            data = data / 10 | 0;    //Refer (It removes last digit)
            // console.log(data);
        }
    }
    return true;
}
console.log(checkBinary(2011));
console.log(checkBinary(1010));
console.log(checkBinary(1234));