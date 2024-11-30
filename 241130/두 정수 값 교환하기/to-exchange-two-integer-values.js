function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);
[a, b] = swap(a, b);
console.log(a, b);
