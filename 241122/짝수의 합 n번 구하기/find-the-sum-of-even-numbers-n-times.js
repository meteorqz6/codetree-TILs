const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let start = Number(input[i].split(' ')[0]);
    let end = Number(input[i].split(' ')[1]);
    let sum = 0;
    for (let j = start; j <= end; j++) {
        if (j % 2 === 0) {
            sum += j;
        }
    }
    console.log(sum);
}