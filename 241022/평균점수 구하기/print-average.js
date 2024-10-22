const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sumVal = 0;
let avgVal;

for(num of arr) sumVal += num;
avgVal = (sumVal/8).toFixed(1);
console.log(avgVal);