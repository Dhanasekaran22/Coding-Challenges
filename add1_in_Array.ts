function addOneInArray(element:number[]){
let joinedArrayString=element.join("")
let joinedArrayNumber=Number(joinedArrayString)+1;

let NumberToString=joinedArrayNumber.toString().split('')

console.log(NumberToString.map(Number))
}
addOneInArray([1,2,3]);