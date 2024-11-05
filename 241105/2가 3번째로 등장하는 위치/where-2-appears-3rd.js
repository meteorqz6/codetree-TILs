const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let cnt = 0;
let idx;

for(let i = 0; i < n; i++) {
    if(arr[i] === 2) {
        cnt++;
    }

    if(cnt === 3) {
        idx = i;
    }
}

console.log(idx);