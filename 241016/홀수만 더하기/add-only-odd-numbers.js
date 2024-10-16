const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let sumVal = 0;
for(let i = 1; i<=n; i++){
    if(Number(input[i])%2!==0 && Number(input[i])%3===0){
        sumVal += Number(input[i]);
    }
}
console.log(sumVal);