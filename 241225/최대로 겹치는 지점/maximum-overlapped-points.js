const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const checked = Array(101).fill(0);

for (let i = 1; i <= n; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    for (let j = start; j <= end; j++) {
        checked[j] += 1;
    }
}

console.log(Math.max(...checked));