function calculate(a, b) {
    if (a > b) {
        a *= 2;
        b += 10;
    } else {
        a += 10;
        b *= 2;
    }
    return [a, b];
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
console.log(calculate(a, b).join(' '));