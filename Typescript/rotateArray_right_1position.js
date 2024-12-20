var rotate_array = [1, 2, 3, 4, 5];
console.log("Array Before Rotation : ", rotate_array);
rightRotateArray(rotate_array);
console.log("Right Rotate Array : ", rotate_array);
function rightRotateArray(rotate_array) {
    var last = rotate_array.pop();
    rotate_array.unshift(last);
}
