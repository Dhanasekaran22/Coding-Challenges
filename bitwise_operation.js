function bitwiseoperation(element1, element2) {
    var binaryElement1 = element1.toString(2);
    var binaryElement2 = element2.toString(2);
    var bitwiseAND = element1 & element2;
    var bitwiseOR = element1 | element2;
    var bitwiseXOR = element1 ^ element2;
    console.log(bitwiseAND);
    console.log(bitwiseOR);
    console.log(bitwiseXOR);
}
bitwiseoperation(7, 12);
