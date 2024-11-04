const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let countArr = Array(10).fill(0);

for(let i = 0; ; i++) {
    if(input[i] === 0) {
        break;
    }
    countArr[parseInt(input[i]/10)]++;
}

for(let i = 1; i < 10; i++) {
    console.log(`${i} - ${countArr[i]}`);
}