const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 1;

for(let i = 0; i < n; i++) {
    let str = "";
    for(let j = 0; j < m; j++) {
        arr2d[i][j] = num;
        str += arr2d[i][j] + " ";
        num += 1;
    }
    console.log(str);
}