const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let countArr = Array(7).fill(0);

for(let i = 0; i < input.length; i++) {
    countArr[input[i]]++;
}

for(let i = 1; i < 7; i++) {
    console.log(`${i} - ${countArr[i]}`);
}