function nextNumber(currentSequence:number[]){
    var currentSequence=currentSequence.sort();
    var sequenceNumber:number[]=[currentSequence[0]];
    for(let i=1;i<=currentSequence.length;i++){
        
        if(currentSequence[i]-currentSequence[i-1]===1){
            sequenceNumber.push(currentSequence[i]);
            
        }
        else{
            var count:number=currentSequence[i]-currentSequence[i-1];
           
            for(let j=1;j<=count;j++){
              sequenceNumber.push(currentSequence[i-1]+j);   
            }
           
        }
       
    }
    console.log(sequenceNumber);
   
    

}
nextNumber([1,2,6]);