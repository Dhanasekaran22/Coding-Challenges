/*
Given an array arr of integers, check if there exist two indices i and j such that :
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
*/

function doubleExists(elements:number[]):boolean{
    const inputNumber=elements.sort((a,b)=>a-b);
    console.log(inputNumber);
    let count=0;
    for(let element of inputNumber){
        if(element==0 && inputNumber.indexOf(0) !== inputNumber.lastIndexOf(0)){     
            return true;
            
        }

        else if(inputNumber.includes(element+element) && element!=0){
            return true;
        }
    }
    return false;
}
console.log(doubleExists([2,5,3,0]))        
console.log(doubleExists([10,2,5,3,0]))
console.log(doubleExists([3,1,7,11,0,0]));
