const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const targetArr = input[2].split(' ').map(Number);
let result = [];

const numCount = new Map();

for (let i = 0; i < n; i++) {
    let k = arr[i];

    if (numCount.has(k)) {
        let v = numCount.get(k);
        numCount.set(k, v + 1);
    } else {
         numCount.set(k, 1);
    }
}

for (let i = 0; i < m; i++) {
    let k = targetArr[i];

    if (numCount.has(k)) {
        result.push(numCount.get(k));
    } else {
        result.push(0);
    }
}

console.log(result.join(' '));

