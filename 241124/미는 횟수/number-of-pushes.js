const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let strA = input[0];
const strB = input[1];
const len = strA.length;
let cnt = -1;

for (let i = 0; i < len; i++) {
    strA = strA[len - 1] + strA.slice(0, len - 1);
    if (strA === strB) {
        cnt = i + 1;
        break;
    }
}

console.log(cnt);