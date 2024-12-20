/*
Input a string of alphabets. Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence in ts.
 */
function Occurence(alphabets) {
    var inp = alphabets.toLocaleLowerCase();
    var rejStr = "";
    var maxCount = 0;
    var count = 0;
    var maxStr = "";
    for (var i = 0; i < inp.length; i++) {
        if (rejStr.indexOf(inp[i]) == -1) {
            rejStr += inp[i];
            for (var j = 0; j < inp.length; j++) {
                if (inp[i] == inp[j]) {
                    count++;
                }
            }
            console.log("".concat(inp[i], ": ").concat(count));
            if (count > maxCount) {
                maxCount = count;
                maxStr = inp[i];
            }
            count = 0;
        }
    }
    console.log("Maximum Alpahabet : ".concat(maxStr));
}
Occurence("Ababbc");
/*
sample input: Ababbc
sample output:
a: 2
b: 3
c: 1
Maximim Alpahabet : b
*/ 
