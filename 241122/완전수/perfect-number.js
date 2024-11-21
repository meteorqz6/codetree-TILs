const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const start = input[0];
const end = input[1];
let cnt = 0;

for (let i = start; i <= end; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }
    if(sum === i) {
        cnt++;
    }
}
console.log(cnt);
