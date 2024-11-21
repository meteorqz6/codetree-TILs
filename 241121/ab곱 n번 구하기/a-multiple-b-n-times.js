const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let str = '';

for (let i = 1; i <= n; i++) {
    let x = input[i].split(' ');
    let a = Number(x[0]);
    let b = Number(x[1]);

    let result = 1;
    for (let i = a; i <= b; i++) {
        result *= i;
    }
    console.log(result);
}
