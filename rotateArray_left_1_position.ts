let rotateArray=[1,2,3,4,5];
console.log("Array Before Rotation : ",rotateArray);

leftRotateArray(rotateArray);
console.log("Left Rotated Array :", rotateArray);

function leftRotateArray(rotateArray: any[]){
   let first= rotateArray.shift();
    rotateArray.push(first);
}

