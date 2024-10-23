const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let sumLen = 0;
for(let i = 0; i < 10; i++){
    sumLen += input[i].length;
}
console.log(sumLen);