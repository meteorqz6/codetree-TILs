const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let limitUnder500 = [];
let limitUpper500 = [];

for(let i = 0; i < 10; i++) {
    if(input[i] > 500) {
        limitUpper500.push(input[i]);
    } else {
        limitUnder500.push(input[i]);
    }
}

const max = Math.max(...limitUnder500);
const min = Math.min(...limitUpper500);

console.log(max, min);