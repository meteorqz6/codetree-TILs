function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let a;
let b;
if (input.length === 1) {
    a = input[0];
    if (isPrime(a)) { console.log(a); }
    else {
        console.log(0);
    }

} else {
    a = input[0];
    b = input[1];

    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    console.log(sum);
}
