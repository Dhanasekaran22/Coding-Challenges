const cmd = require('prompt-sync')();
const string_nprime = cmd("Enter the No of primes : ");
const string_startAt = cmd("Enter the start at primes: ");

const nprime: number = parseInt(string_nprime);
const startAt: number = parseInt(string_startAt);
var primeArray: number[] = [];
var count = 0;


const isprime = (num: number): boolean => {
    if (num < 2)
        return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = startAt; ; i++) {

    if (isprime(i)) {
        primeArray.push(i);
        count += 1;
    }

    if (count == nprime) {
        break;
    }
}


console.log(primeArray);

