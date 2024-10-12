const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let result1 = a < b ? 1 : 0;
let result2 = a === b ? 1 : 0;
console.log(result1, result2);