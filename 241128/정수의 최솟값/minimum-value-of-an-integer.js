function min(a, b, c) {
    return Math.min(a, b, c);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b, c] = input.map(Number);

console.log(min(a, b, c));