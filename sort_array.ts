//Write a function that takes two sorted arrays and returns a single sorted array.(Merge Two Sorted Arrays)

const mergeSortedArray=(array1:number[],array2:number[]):number[]=>{
    const sortArray1=array1.sort();
    const sortArray2=array2.sort();
    for(let i=0;i<array2.length;i++){
        sortArray1.push(sortArray2[i])
    }
    const mergeSortArray=sortArray1.sort();
    return mergeSortArray;
}
console.log(mergeSortedArray([3,2,1,5],[4,7,8,6]));
