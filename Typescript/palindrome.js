var CheckPalindrome = function (element) {
    var originalElement = element.split("").join().toLowerCase();
    var reverseElement = element.split("").reverse().join().toLowerCase();
    var result = false;
    for (var i = 0; i < reverseElement.length; i++) {
        if (reverseElement[i] == originalElement[i]) {
            result = true;
        }
        else {
            result = false;
        }
    }
    if (result) {
        return true;
    }
    return false;
};
console.log(CheckPalindrome("racecar"));
console.log(CheckPalindrome("A man a plan a canal Panama"));
console.log(CheckPalindrome("Hello"));
