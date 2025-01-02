function reverseString(element) {
    var elementArray = element.split("");
    var reverse = [];
    while (elementArray.length) {
        reverse.push(elementArray.splice(elementArray.length - 1, 1)[0]);
    }
    console.log(reverse.join(""));
}
reverseString("Typescript");
reverseString("HTML");
