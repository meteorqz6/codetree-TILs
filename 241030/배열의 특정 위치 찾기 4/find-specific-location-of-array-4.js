const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let cnt = 0;
let sum = 0;

for(let i = 0; i < input.length; i++){
    if(input[i]!==0 && input[i]%2===0){
        sum += input[i];
        cnt++;
    }
}

console.log(cnt, sum);