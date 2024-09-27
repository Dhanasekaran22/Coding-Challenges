function nextNumber(currentSequence:number[]){
    var currentSequence=currentSequence.sort((a,b)=>a-b);
   
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
nextNumber([6,7,10,5,18]);
nextNumber([1,2,6,9]);