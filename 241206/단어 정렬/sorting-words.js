const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
}

arr.sort();

for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}