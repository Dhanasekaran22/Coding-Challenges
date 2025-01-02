function reverseString(element:string){
   let elementArray=element.split("");
    let reverse:string[]=[];
    while(elementArray.length){
        reverse.push(elementArray.splice(elementArray.length-1,1)[0])
    }

    console.log(reverse.join(""));
    

}
reverseString("Typescript");
reverseString("HTML")
