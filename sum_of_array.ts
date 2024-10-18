//Write a function that takes an array of numbers and returns their sum.
 const sumOfArray=(element:number[])=>{
    let sumArray=0;
    for(let i=0;i<element.length;i++){
        sumArray+=element[i];
    }
    return sumArray;

 }
 console.log(sumOfArray([1,2,3,4,5,6]))