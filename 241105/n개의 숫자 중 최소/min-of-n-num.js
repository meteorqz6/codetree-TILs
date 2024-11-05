const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input[0];
const arr = input[1].split(' ').map(Number);
let minVal = Number.MAX_SAFE_INTEGER;
let cnt = 0;

for(let i = 0; i < n; i++) {
    if(minVal > arr[i]) {
        minVal = arr[i];
    }
}

for(let i = 0; i < n; i++) {
    if(minVal === arr[i]) {
        cnt++;
    }
}

console.log(minVal, cnt);