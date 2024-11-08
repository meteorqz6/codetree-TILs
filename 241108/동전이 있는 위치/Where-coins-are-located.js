const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);

let arr = Array(n).fill(0).map(() => Array(n).fill(0));

for(let i = 1; i <= m; i++) {
    let r = Number(input[i].split(' ')[0]);
    let c = Number(input[i].split(' ')[1]);
    arr[r-1][c-1] = 1;
}

const result = arr.map(row => row.join(' ')).join('\n');
console.log(result);