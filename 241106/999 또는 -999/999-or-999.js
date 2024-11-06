const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let minVal = Number.MAX_SAFE_INTEGER;
let maxVal = Number.MIN_SAFE_INTEGER;

for(let i = 0; ;i++) {
    if(input[i] === 999 || input[i] === -999) {
        break;
    }

    if(input[i] > maxVal) {
        maxVal = input[i];
    }

    if(input[i] < minVal) {
        minVal = input[i];
    }
}

console.log(maxVal, minVal);