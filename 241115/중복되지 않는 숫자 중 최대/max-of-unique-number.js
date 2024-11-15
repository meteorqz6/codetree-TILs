const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let result = [];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i]) && max === arr[i]) {
        max = -1;
    } else {
        if (max < arr[i]) {
            max = arr[i];
        }
        result.push(arr[i]);
    }
}

console.log(max);