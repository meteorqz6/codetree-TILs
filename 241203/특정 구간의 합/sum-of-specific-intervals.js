const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(' ').map(Number);
let cnt = Number(input[0].split(' ')[1]);

function sum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += arr[i - 1];
    }
    return sum;
}

for (let i = 2; i < cnt + 2; i++) {
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    console.log(sum(a, b));
}