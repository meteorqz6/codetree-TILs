const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number).sort((a, b) => a - b);
const arr2 = input[2].trim().split(' ').map(Number).sort((a, b) => a - b);
let result = true;

for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) {
        result = false;
        break;
    }
}

if (result) console.log('Yes');
else console.log('No');