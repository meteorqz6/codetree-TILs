const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const strA = input[0];
const strB = input[1];
const char1 = strB[0];
const char2 = strB[1];
let cnt = 0;

for(let i = 0; i < strA.length - 1; i++){
    if(char1 === strA[i] && char2 === strA[i+1]){
        cnt++;
    }
}
console.log(cnt);