const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] === max) {
        max = arr[i - 1];
    }
}

console.log(max);