/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/*

function searchInsertPosition(element: number[], target: number): number {
     let index=element.indexOf(target);

    if(index!==-1){
        return index;
    }
    else{
        for(let i=0;i<=element.length;i++){
            if(target < element[i])
                return i   
        }
    }
    return element.length;
};

*/

function searchInsertPosition(element: number[], target: number): number {
   let left=0;
   let right=element.length-1;

   while(left<=right){
    const midValue=Math.floor((left+right)/2);
    if(element[midValue]===target)
        return midValue;
    
    else if(element[midValue]<target)
        left=midValue+1;

    else
        right=midValue-1;

   }
   return left;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsertPosition([1, 3, 5, 6], 7)); // Output: 4
console.log(searchInsertPosition([1, 3, 5, 6, 9, 10], 7)); 