/*
Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
Example 2:
Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
Example 3:
Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.
*/

const get_Input=require('prompt-sync')()
const sentence=get_Input("Enter the sentence: ");
const prefix=get_Input("Enter the prefix: ")

let sentenceToWord:string[]=sentence.split(' ');
let found=false;

for(let i=0;i<sentenceToWord.length;i++){
    let temp=sentenceToWord[i];
   
    if(temp.length >= prefix.length){
        let match=true;
        for(let j=0;j<prefix.length;j++){
            if(temp[j]!=prefix[j]){
                match=false;
                break;
            }
    }
    if(match){
        console.log(i+1);  
         found=true; 
        break;
    }
    
    }

}
if(!found){
    console.log(-1);
}