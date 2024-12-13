const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let start = 0;
let result = [];
for (let i = 0; i < n; i += 2) {
    let strArr = arr.slice(0, i + 1);
    strArr.sort((a, b) => a - b);
    result.push(strArr[start]);
    start++;
}

console.log(result.join(' '));