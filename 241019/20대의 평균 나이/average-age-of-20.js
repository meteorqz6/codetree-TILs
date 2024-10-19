const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n;
let index = 0;
let sumVal = 0;

while (true) {
    n = Number(input[index]);
    if(n>=30 || n<20){
        break;
    }
    sumVal += n;
    index++;
}

console.log((sumVal/index).toFixed(2));