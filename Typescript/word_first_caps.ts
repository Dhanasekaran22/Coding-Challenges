const promp=require('prompt-sync')();

const input=promp("Enter the string: ");

let words:string[]=input.split(' ');

for(let i=0;i<words.length;i++){
    if(words[i].length==1){
        words[i]=words[i].toUpperCase();
    }
    else{
        let j=0;
        let temp:string[]=words[i].split('');
        temp[j]=temp[j].toUpperCase();
        temp[j]=temp.join("");
        words[i]=temp[j];
        temp=[];
    }
}

console.log(words.join(" "));