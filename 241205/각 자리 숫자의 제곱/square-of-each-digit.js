const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n < 10) {
        return n * n;
    }

    return f(parseInt(n / 10)) + (n % 10) * (n % 10);
}

console.log(f(n));