const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;
let avg;

for(let i = 1; i < input.length; i+=2){
    sum += input[i];
}
avg = ((input[2]+input[5]+input[8])/3).toFixed(1);
console.log(sum, avg);