const Input=require('prompt-sync')();
const get_input=Input("Enter the number: ");


let duplicateElement:number[]=get_input.split('').map(Number);
console.log("The Input Elements are ",duplicateElement);

const filterElements=duplicateElement.filter((element,index)=>{
    return duplicateElement.indexOf(element)==index
}
)
console.log("The Original Elements are ",filterElements);