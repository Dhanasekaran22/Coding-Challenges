function addOneInArray(element) {
    var joinedArrayString = element.join("");
    var joinedArrayNumber = Number(joinedArrayString) + 1;
    var NumberToString = joinedArrayNumber.toString().split('');
    console.log(NumberToString.map(Number));
}
addOneInArray([1, 2, 3]);
