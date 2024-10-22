const fs = require('fs');
let arr = fs.readFileSync(0).toString().split(' ');
console.log(arr.reverse().join(''));