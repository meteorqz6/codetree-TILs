const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input[0];
const arr = input[1].split(' ').map(Number);

for(let i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
}

console.log(arr.join(' '));