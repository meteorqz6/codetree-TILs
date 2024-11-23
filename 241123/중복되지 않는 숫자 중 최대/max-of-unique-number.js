const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let result = [];

for (let i = 1; i < n; i++) {
    if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
    }
}

console.log(Math.max(...result));