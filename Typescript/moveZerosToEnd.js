/*
given an array N representing chocolate packets, where 0 indicates an empty packets,
move all 0s to the end while maintaining the order of non-zero elements

input : arr=[4,5,0,1,9,0,5,0];
output : 4 5 1 9 5 0 0 0
*/
var moveZeroToEnds = function (data) {
    for (var i = data.length - 1; i >= 0; i--) { //  for (let i = 0; i < data.length; i++) { 
        //  it affects the original data index             
        if (data[i] === 0) {
            var temp = data.splice(i, 1)[0];
            data.push(temp);
        }
    }
    console.log("output ".concat(data.join(' ')));
    if (data.every(function (item) { return typeof item === "number"; }))
        console.log("This is Number ".concat(typeof (data)));
};
moveZeroToEnds([4, 5, 0, 1, 9, 0, 5, 0]);
moveZeroToEnds([0, 1, 0, 0, 2, 3, 0, 4, 0, 5]);
moveZeroToEnds([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]);
