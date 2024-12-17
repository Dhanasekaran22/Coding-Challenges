function doubleExists(elements:number[]):boolean{
    const inputNumber=elements.sort((a,b)=>a-b);
    console.log(inputNumber);
    let count=0;
    for(let element of inputNumber){
        if(inputNumber.indexOf(0,1)!=inputNumber.indexOf(element)){     // correct the logic 
            return true;
            
        }

        else if(inputNumber.includes(element+element) && element!=0){
            return true;
        }
    }
    return false;
}
console.log(doubleExists([2,5,3,0]))        // output is false but here it shows true correct the code
console.log(doubleExists([10,2,5,3,0]))
console.log(doubleExists([3,1,7,11,0,0]));
