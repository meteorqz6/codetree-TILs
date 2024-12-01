const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b] = input;

function partstr() {
    return a.indexOf(b);
}

console.log(partstr());