const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let countArr = Array(11).fill(0);

for(let i = 0; ;i++) {
    if(input[i] === 0) {
        break;
    }
    countArr[parseInt(input[i]/10)]++;
}

for(let i = 10; i > 0; i--) {
    console.log(`${i*10} - ${countArr[i]}`);
}