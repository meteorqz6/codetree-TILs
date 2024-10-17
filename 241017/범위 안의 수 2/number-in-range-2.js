const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let sumVal = 0;
let cnt = 0;
let avgVal;

for(let i = 0; i < 10; i++){
    if(0<=Number(input[i]) && Number(input[i]<=200)){
        sumVal += Number(input[i]);
        cnt++;
    }
}

avgVal = (sumVal/cnt).toFixed(1);

console.log(sumVal, avgVal);