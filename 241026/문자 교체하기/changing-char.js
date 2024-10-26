const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let strA = input[0];
let strB = input[1];
const result = strA.slice(0,2) + strB.slice(2);
console.log(result);