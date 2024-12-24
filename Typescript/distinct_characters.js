/*
Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/
function countConsistentWords(words, allowed) {
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var isChecked = true;
        for (var i = 0; i < word.length; i++) {
            if (!allowed.includes(word[i])) {
                isChecked = false;
                break;
            }
        }
        if (isChecked) {
            count += 1;
        }
    }
    console.log(count);
}
countConsistentWords(["ad", "bd", "aaab", "baa", "badab"], 'ab');
countConsistentWords(["a", "b", "c", "ab", "ac", "bc", "abc"], 'abc');
countConsistentWords(["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"], 'cad');
