const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let sumVal = 0;
let avgVal;

for(let i = 0; i < n; i++){
    sumVal += arr[i];
}

avgVal = (sumVal/n).toFixed(1);
console.log(avgVal);

if(avgVal >= 4.0){
    console.log('Perfect');
} else if(avgVal >= 3.0){
    console.log('Good');
} else {
    console.log('Poor');
}