function nextNum(arr){
    var arr1:number[]=arr;
    var sortarr=arr1.sort()
    console.log(sortarr);
    for(let i=0;i<sortarr.length-1;i++){
        if(sortarr[i+1]-sortarr[i]!=1){
            console.log(sortarr[i]+1);
        }
    }
}

nextNum([5,2,4,3,8]);