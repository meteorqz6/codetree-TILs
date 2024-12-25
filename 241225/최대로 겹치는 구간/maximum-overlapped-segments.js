const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const offset = 100;
let arr = Array(201).fill(0);

for (let i = 1; i <= n; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    for (let j = start + offset; j < end + offset; j++) {
        arr[j - 1] += 1;
    }
}

console.log(Math.max(...arr));