const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let sumVal = 0;
let result;
for(let i = 1; i<=100; i++){
    if(sumVal >= n){
        break;
    }
    sumVal += i;
    result = i;
}
console.log(result);