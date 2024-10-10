function isNestedArray(mainArray:any[]){
    
    for(let iterateArray of mainArray ){
        if(Array.isArray(iterateArray)){
            return true;
        }
  
    }
    return false;
}

console.log(isNestedArray([1,2,3,4,[5,6]]));
console.log(isNestedArray([2,3,4,5]));