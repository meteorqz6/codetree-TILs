const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

function add(n) {
    if (n === 1) {
        return 1;
    }
    return add(n - 1) + n;
}

console.log(add(n));