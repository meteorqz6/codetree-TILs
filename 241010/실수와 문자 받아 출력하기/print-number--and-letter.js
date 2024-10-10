const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a = input[0];
let b = Number(input[1]);
let c = Number(input[2]);
console.log(a);
console.log(b.toFixed(2));
console.log(c.toFixed(2));