var countWordFrequency = function (element) {
    var inputString = element.split(' ');
    var words = {};
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var word = inputString_1[_i];
        if (words[word]) {
            words[word] += 1;
        }
        else {
            words[word] = 1;
        }
    }
    return words;
};
console.log(countWordFrequency("this is a word this is word"));
