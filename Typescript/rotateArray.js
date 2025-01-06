var leftRotation = function (element, target) {
    var rotateArray = element;
    for (var i = 0; i < target; i++) {
        var rotateElement = Number(rotateArray.splice(0, 1));
        rotateArray.push(rotateElement);
    }
    console.log("The Left Rotation is " + rotateArray);
};
var rightRotation = function (element, target) {
    var rotateArray = element;
    for (var i = 0; i < target; i++) {
        var rotateElement = rotateArray.pop();
        if (rotateElement != undefined) {
            rotateArray.unshift(rotateElement);
        }
    }
    console.log("The Right Rotation is " + rotateArray);
};
leftRotation([1, 2, 3, 4, 5], 2);
rightRotation([1, 2, 3, 4, 5], 2);
leftRotation([10, 20, 30, 40, 50], 3);
rightRotation([10, 20, 30, 40, 50], 3);
