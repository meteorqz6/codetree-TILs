const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;

let minVal = INT_MAX;

for (let i = 0; i < n; i++) {
    let position = i;
    let value = 0;
    for (let j = 0; j < n; j++) {
        value += Math.abs(position - j) * arr[j];
    }
    minVal = Math.min(minVal, value);
}

console.log(minVal);