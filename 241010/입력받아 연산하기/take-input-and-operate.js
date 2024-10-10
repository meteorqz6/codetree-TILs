const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a = Number(input[0]) + 87;
let b = Number(input[1]) % 10;
console.log(a);
console.log(b);