const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a = Number(input[0]);
let b = Number(input[1].split(' ')[0]);
let c = Number(input[1].split(' ')[1]);
let d = Number(input[1].split(' ')[2]);
let e = Number(input[1].split(' ')[3]);

console.log(a>b?1:0);
console.log(a>c?1:0);
console.log(a>d?1:0);
console.log(a>e?1:0);