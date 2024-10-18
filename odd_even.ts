
//Create a function that takes an integer as an argument and returns 'even' if the number is even and 'odd' if it's odd.

const getInputFromUser=require('prompt-sync')();
const promptTogetInput=getInputFromUser("Enter the Number : ")

const toNumber=parseInt(promptTogetInput);

function toFindOddorEven(element:number){
    if(element%2==0){
        console.log( "Even");
    }
    else if(element%2!=0){
        console.log("Odd");
    }
}
toFindOddorEven(toNumber)