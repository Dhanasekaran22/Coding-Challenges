/*
Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
Example 2:
Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
Example 3:
Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.
*/
var get_Input = require('prompt-sync')();
var sentence = get_Input("Enter the sentence: ");
var prefix = get_Input("Enter the prefix: ");
var sentenceToWord = sentence.split(' ');
var found = false;
for (var i = 0; i < sentenceToWord.length; i++) {
    var temp = sentenceToWord[i];
    if (temp.length >= prefix.length) {
        var match = true;
        for (var j = 0; j < prefix.length; j++) {
            if (temp[j] != prefix[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            console.log(i + 1);
            found = true;
            break;
        }
    }
}
if (!found) {
    console.log("-1");
}
