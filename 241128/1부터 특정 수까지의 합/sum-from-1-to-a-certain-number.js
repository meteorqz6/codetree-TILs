function add(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let sumVal = add(n);
console.log(parseInt(sumVal / 10));