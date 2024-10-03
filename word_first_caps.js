var promp = require('prompt-sync')();
var input = promp("Enter the string: ");
var words = input.split(' ');
for (var i = 0; i < words.length; i++) {
    if (words[i].length == 1) {
        words[i] = words[i].toUpperCase();
    }
    else {
        var j = 0;
        var temp = words[i].split('');
        temp[j] = temp[j].toUpperCase();
        temp[j] = temp.join();
        console.log(temp);
        words[i] = temp[j];
        temp = [];
    }
}
var res = words.join();
console.log(res);
