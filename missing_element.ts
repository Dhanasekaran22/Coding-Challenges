//Write a function that finds the missing number in a given array of integers from 1 to n.

const getPrompt=require('prompt-sync')();
const getArray=getPrompt("Enter the Array Elements: ");

const toNumberArray=getArray.split('').map(Number).sort();

// const missingElement:number[]=[];
// const lengthOfArray:number=toNumberArray.length-1;
// const lastElement=toNumberArray[lengthOfArray];

const toFindMissingElement=(NumberArray:number[])=>{
    for (let i=0;i<toNumberArray.length-1;i++){
        if(NumberArray[i+1]-NumberArray[i]!==1){
            console.log(NumberArray[i]+1)
           
        }
    }
   
}

toFindMissingElement(toNumberArray);