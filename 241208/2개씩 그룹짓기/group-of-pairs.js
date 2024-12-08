const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let arr1 = [];
let sumArr1 = 0;
let arr2 = [];
let sumArr2 = 0;

for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
        arr1.push(arr[i]);
        sumArr1 += arr[i];
    } else {
        arr2.push(arr[i]);
        sumArr2 += arr[i];
    }
}

console.log(Math.max(sumArr1, sumArr2));

