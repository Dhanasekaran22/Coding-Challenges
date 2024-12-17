const countWordFrequency=(element:string):{[key:string]:number}=>{
    const inputString:string[]=element.split(' ');
    const words:{[key:string]:number}={};

    for(let word of inputString){
        if(words[word]){
            words[word]+=1;
        }
        else{
            words[word]=1;
        }
    }
    return words;
}
console.log(countWordFrequency("this is a word this is word"));