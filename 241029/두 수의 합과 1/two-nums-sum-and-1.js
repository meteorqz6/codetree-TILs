const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');
let sum = Number(input[0])+Number(input[1]);
let strSum = sum.toString();
let cnt = 0;

for(let i = 0; i < strSum.length; i++){
    if(strSum[i] === '1'){
        cnt++;
    }
}

console.log(cnt);