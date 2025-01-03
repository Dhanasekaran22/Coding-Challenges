/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.
 
Example 1:
Input: nums = [1,1,1], k = 2
Output: 2
Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

const subArraySum = (element: number[], target: number) :number=> {
    let count = 0;
    for (let i = 0; i < element.length ; i++) {
        let sum = 0;
        for (let j = i; j < element.length; j++) {
            sum+=element[j];
            if(sum===target){
                count+=1
            }
        }
    }



    console.log(count);

}

subArraySum([1, 1, 1,2], 2)
subArraySum([1, 2, 3,2], 3)