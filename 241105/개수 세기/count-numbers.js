const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(Number);
let cnt = 0;

for(let i = 0; i < n; i++) {
    if(arr[i] === m) {
        cnt++;
    }
}

console.log(cnt);