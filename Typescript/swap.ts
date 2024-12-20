// Declare two variables x and y with numerical values. Swap their values without using a third variable

function swap(a:number ,b:number){
    var a=a+b;
    var b=a-b;
    var a=a-b;
    console.log(a,b);
}
swap(20,30);
