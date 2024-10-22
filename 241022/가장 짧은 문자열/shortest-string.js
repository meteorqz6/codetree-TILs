const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a = input[0].length;
let b = input[1].length;
let c = input[2].length;
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
console.log(max - min);