/*
Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by *.
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”
*/
function ispalindrome(query) {
    var word = query.split(" ");
    var checkPalindrome;
    for (var i = 0; i < word.length; i++) {
        checkPalindrome = word[i].split("").reverse().join('');
        if (word[i] == checkPalindrome && word[i].length != 1) {
            var stars = "";
            for (var i_1 = 0; i_1 < checkPalindrome.length; i_1++) {
                stars += "*";
            }
            word[i] = stars;
        }
    }
    console.log(word.join(' '));
}
ispalindrome("bob has a radar plane");
/*
sample input:   bob has a radar plane
sample output:  *** has a ***** plane
*/ 
