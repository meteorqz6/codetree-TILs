const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr = [];

for(let i = input.length - 2; i >= 0; i--){
    arr.push(input[i]);
}

console.log(arr.join(' '));