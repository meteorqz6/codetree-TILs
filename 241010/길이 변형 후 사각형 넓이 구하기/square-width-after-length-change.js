const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]) + 8;
let b = Number(input[1])*3;
console.log(`${a}\n${b}\n${a*b}`);