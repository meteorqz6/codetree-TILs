const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let minVal = Number.MAX_SAFE_INTEGER;

for(let i = n - 1; i >= 0; i--) {
    for(let j = i - 1; j >= 0; j--) {
        let n = arr[i] - arr[j];
        if(minVal > n) minVal = n;
    }
}

console.log(minVal);