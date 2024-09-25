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
var num = 42;
var num1 = num.toString(2);
console.log(num1);
var count = 0;
var str = num1.split("");
for (var i = 0; i < str.length; i++) {
    if (str[i] == "0") {
        count += 1;
    }
}
console.log(count);
