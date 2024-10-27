const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
console.log(input[0].charCodeAt()+' '+String.fromCharCode(Number(input[1])));