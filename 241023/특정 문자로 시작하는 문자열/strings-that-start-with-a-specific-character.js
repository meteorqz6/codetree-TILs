const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const char = input[n+1];
let sumLen = 0;
let cnt = 0;

for(let i = 1; i <= n; i++){
    if(input[i][0] === char){
        cnt++;
        sumLen += input[i].length;
    }
}

console.log(cnt, (sumLen/cnt).toFixed(2));