const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 0;

for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            arr2d[j][i] = num;
            num++;
        }
    }
    else {
        for (let j = n - 1; j >= 0; j--) {
            arr2d[j][i] = num;
            num++;
        }
    }
}

console.log(arr2d.map((row) => row.join(' ')).join('\n'));