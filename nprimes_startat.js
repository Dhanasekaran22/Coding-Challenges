var cmd = require('prompt-sync')();
var string_nprime = cmd("Enter the No of primes : ");
var string_startAt = cmd("Enter the start at primes: ");
var nprime = parseInt(string_nprime);
var startAt = parseInt(string_startAt);
var primeArray = [];
var count = 0;
var isprime = function (num) {
    if (num < 2)
        return false;
    for (var i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};
for (var i = startAt;; i++) {
    if (isprime(i)) {
        primeArray.push(i);
        count += 1;
    }
    if (count == nprime) {
        break;
    }
}
console.log(primeArray);
