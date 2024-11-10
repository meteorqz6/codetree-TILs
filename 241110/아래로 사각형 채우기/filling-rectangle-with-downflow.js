const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

let num = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr2d[j][i] = num;
        num++;
    }
}

console.log(arr2d.map((row) => row.join(' ')).join('\n'));