function power(a, b) {
    return a ** b;
}
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);
console.log(power(a, b));
