// import * as readline from 'readline';
// const rl=readline.createInterface({
// input: process.stdin,
// output:process.stdout
// });

// rl.question("please enter something: ",(input: string)=>{
//     console.log(`you entered ${input}`);
//     rl.close();

// })

// import * as readline from'readline';
// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r1.question("please enter something",(input:string)=>{
//     console.log(`you entered:${input}`);
// });


const num:number=42;
var num1:string=num.toString(2);
console.log(num1)
var count=0;
var str:string[]=num1.split("");
for(let i=0;i<str.length;i++){
    if(str[i]=="0"){
        count+=1;

    }
}
console.log(count);