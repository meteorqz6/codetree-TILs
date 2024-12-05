const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n % 2 === 0) {
        return f(n - 2) + n;
    } else {
        return f(n - 2) + n;
    }
}

console.log(f(n));