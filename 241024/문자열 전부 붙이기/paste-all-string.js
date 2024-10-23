const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let str = "";
for(let i = 1; i <= n; i++){
    str += input[i];
}
console.log(str);