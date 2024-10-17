const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let sumVal = 0;
let avgVal;

for(let i = 1; i <= n; i++){
    sumVal += Number(input[i]);
}
avgVal = (sumVal/n).toFixed(1);
console.log(sumVal, avgVal);