let arr = Array(10);

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

arr[0] = input[0];
arr[1] = input[1];

for(let i = 2; i < 10; i++){
    arr[i] = arr[i-1] + 2*arr[i-2];
}

console.log(arr.join(' '));