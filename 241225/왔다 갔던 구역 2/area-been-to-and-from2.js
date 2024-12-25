const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let arr = Array(2001).fill(0);
let start = 1000;

for (let i = 1; i <= n; i++) {
    // console.log(start);
    let distance = Number(input[i].split(' ')[0]);
    let direction = input[i].split(' ')[1];

    if (direction === 'R') {
        for (let i = start; i < start + distance; i++) {
            arr[i] += 1;
        }
        start = start + distance;
    } else {
        for (let i = start - 1; i >= start - distance; i--) {
            arr[i] += 1;
        }
        start = start - distance;
    }
}

let cnt = 0;
for (let i = 0; i < 2001; i++) {
    if (arr[i] > 1) { cnt++; }
}

console.log(cnt);