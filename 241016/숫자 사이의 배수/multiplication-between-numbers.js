const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let cnt = 0;
let sumVal = 0;
let avgVal;

for(let i = a; i <= b; i++){
    if(i%5===0 || i%7===0){
        cnt++;
        sumVal += i;
    }
}
avgVal = (sumVal/cnt).toFixed(1);
console.log(sumVal, avgVal);