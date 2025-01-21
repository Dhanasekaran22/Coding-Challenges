/*
Given an integer array nums, find the maximum product of any two elements in the array.
Example 1:
Input: 
nums = [1, 5, 2, 9]
Output: 
45 (Because 5 * 9 = 45)

Example 2:
Input:
nums = [-10, -3, 5, 6, -2]
Output:
30
*/
const maxProduct = (element: number[]): number=> {
    let checkMaxProduct=1;
    let result=1;
    for (let i=1;i<element.length;i++) {
        for(let j=i+1;j<element.length;j++){
            checkMaxProduct=element[i]*element[j];
            if(checkMaxProduct>result){
                result=checkMaxProduct;
            }
        }
        
    }
    return result;
}
console.log(maxProduct([1,5,2,9]));
console.log(maxProduct([-10, -3, 5, 6, -2]));