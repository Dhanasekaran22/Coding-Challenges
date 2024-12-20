/* 
write a program that reads an array of ints and outputs the lenght of the longest sequence in strictly 
ascending order. print the eklements of longest ascending sequence in an array elements of the sequence must go one after another. 
A single number is assumed to be an ordered sequence with the length=1.
*/

function removeDuplicates(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}

function longSequence(arr){
    
    var longSequence:number[]=[];
    var currentSequence:number[]=[arr[0]];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            longSequence[index++]=num[i];
            longSequence[index++]=num[i+1];
            count++;
        }
        else{
            max=count;
            
            if(max>count){
                longSequence=[];
                index=0;
                longSequence[index++]=num[i++];
                longSequence[index++]=num[i+1];
            }
            
        }
    }
    var longSequence1=(removeDuplicates(longSequence))
    console.log(`The numbers in ascending order are ${longSequence1}`);
    console.log(`The max value is ${longSequence1.length}`)
}

longSequence([45,40,55,0,39,110]);