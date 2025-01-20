/*
Given an array of numbers, return an array where each element is the product of all the numbers in the original array except 
the number at that index.You cannot use division and must solve it in O(n) time complexity.
Example 1:
Input: 
nums = [1, 2, 3, 4]
Output: 
[24, 12, 8, 6]

Example 2:
Input:
nums = [5, 1, 4, 2]
Output:
[8, 40, 10, 20]
*/

function exceptSelfProduct(element:number[]){
    let product=1;
    let result=[];
    for(let i=0;i<element.length;i++){
        product*=element[i]
    }
    for(let i=0;i<element.length;i++){
        result.push(product/element[i])
    }
    console.log(result);
    

}
exceptSelfProduct([1,2,3,4])
exceptSelfProduct([5, 1, 4, 2])
