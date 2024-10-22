const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const str = input[0];
const char = input[1];
let cnt = 0;

for(let value of str){
    if(value === char){
        cnt++;
    }
}

console.log(cnt);