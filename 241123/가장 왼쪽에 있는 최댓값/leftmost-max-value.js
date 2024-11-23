const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let maxVal = Number.MIN_SAFE_INTEGER;
let idx;
let result = [];

for (let i = 0; i < n; i++) {
    if (maxVal < arr[i]) {
        maxVal = arr[i];
        idx = i + 1;
        result.push(idx);
    }
}

console.log(result.reverse().join(' '));