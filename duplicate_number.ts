const Input=require('prompt-sync')();
const get_input=Input("Enter the number: ");
let duplicateElement:number[]=[];

for(let i=0;i<get_input.length;i++){
    duplicateElement.push(get_input[i]);
}


const filterElements=duplicateElement.filter(num=>
    num%2==0
)
console.log(filterElements);