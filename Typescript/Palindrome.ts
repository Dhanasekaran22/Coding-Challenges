const CheckPalindrome=(element:String):boolean=>{
    let originalElement=element.split("").join().toLowerCase();
    let reverseElement=element.split("").reverse().join().toLowerCase();

    let result=false;
    for(let i=0; i<reverseElement.length;i++){
        if(reverseElement[i]==originalElement[i]){
            result=true;
        }
        else{
            result=false;
        }
    }

    if(result){
        return true;
    }
    return false;
}
console.log(CheckPalindrome("racecar"));
console.log(CheckPalindrome("A man a plan a canal Panama"));
console.log(CheckPalindrome("Hello"));