const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

function fac(n) {
    if (n === 1) {
        return 1;
    }
    return fac(n - 1) * n;
}

console.log(fac(n));