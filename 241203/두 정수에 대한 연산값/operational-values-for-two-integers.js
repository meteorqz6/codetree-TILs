function calculate(a, b) {
    let small = a < b ? a : b;
    let big = a < b ? b : a;

    if (a === small) {
        small = small * 2;
        big = big + 25;
        return [small, big];
    } else {
        small = small * 2;
        big = big + 25;
        return [big, small];
    }
}
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);
console.log(calculate(a, b).join(' '));
