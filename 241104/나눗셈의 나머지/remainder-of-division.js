const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);
let a = input[0];
let b = input[1];
let sum = 0;
let countArr = Array(10).fill(0);

for(let i = 0; ;i++) {
    if(a <= 1) break;
    countArr[a%b]++;
    a = parseInt(a/b);
}

for(let i = 0; i < 10; i++) {
    sum += countArr[i]**2;
}

console.log(sum);