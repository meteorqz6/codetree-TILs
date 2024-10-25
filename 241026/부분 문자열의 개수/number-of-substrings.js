const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const strA = input[0];
const strB = input[1];
let cnt = 0;
let idx = strA.indexOf(strB);

while(idx!==-1){
    cnt++;
    idx = strA.indexOf(strB, idx+2);
}
console.log(cnt);