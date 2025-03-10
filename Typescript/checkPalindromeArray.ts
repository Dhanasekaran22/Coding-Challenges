/*
Given an array, the task is to determine whether an array is a palindrome or not.
Examples: 
 
Input: arr[] = {3, 6, 0, 6, 3}
Output: Palindrome

Input: arr[] = {1, 2, 3, 4, 5}
Output: Not Palindrome
*/

function checkPalindromicArray(data:number[]){

for(let i=0;i<Math.floor((data.length/2));i++){
    const left=data[i];
    const right=data[data.length-1-i];
    if(left==right){
        continue
    }
    else{
        return "the given number is not palindrome"
        
    }

}
return "the given number is palindrome"
}

console.log(checkPalindromicArray([3,6,6,6,0,6,6,6,3]));
console.log(checkPalindromicArray([1,2,3,1]));
console.log(checkPalindromicArray([1,2,3,4,5]));
console.log(checkPalindromicArray([1]));


// let data = [3, 6, 0, 6, 3];
// length = (data.length / 2);
// console.log(Math.floor(length));
