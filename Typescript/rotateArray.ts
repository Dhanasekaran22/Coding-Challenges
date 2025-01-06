const leftRotation = (element: number[], target: number) => {
    let rotateArray: number[] = element;

    for (let i = 0; i < target; i++) {
        let rotateElement: number = Number(rotateArray.splice(0, 1));
        rotateArray.push(rotateElement);

    }
    console.log("The Left Rotation is "+rotateArray);
}

const rightRotation = (element: number[], target: number) => {
    let rotateArray: number[] = element;

    for (let i = 0; i < target; i++) {
        let rotateElement = rotateArray.pop();
        if (rotateElement != undefined) {
            rotateArray.unshift(rotateElement);
        }

    }
    console.log("The Right Rotation is "+rotateArray);
    
}

leftRotation([1, 2, 3, 4, 5], 2)
rightRotation([1, 2, 3, 4, 5], 2)

leftRotation([10, 20, 30, 40, 50], 3);
rightRotation([10, 20, 30, 40, 50], 3);
