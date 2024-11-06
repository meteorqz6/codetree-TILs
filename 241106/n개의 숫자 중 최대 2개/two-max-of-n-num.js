const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const sortArr = arr.sort((a,b) => b-a);
console.log(sortArr[0], sortArr[1]);