const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let sum = 0;
let result = "";

for(let i = 1; i <= n; i++){
    sum += Number(input[i]);
}
const strSum = sum.toString();

for(let i = 1; i < strSum.length; i++){
    result += strSum[i];
}
result += strSum[0];
console.log(result);