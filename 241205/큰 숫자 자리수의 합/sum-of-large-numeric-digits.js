const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let multiply = arr[0] * arr[1] * arr[2];

function f(n) {
    if (n < 10) {
        return n;
    }
    return f(parseInt(n / 10)) + n % 10;
}

console.log(f(multiply));