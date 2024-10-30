const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr = [];

for(let i = input.length - 1; i >= 0; i--){
    if(input[i]!=='0'){
        arr.push(input[i]);
    }
}

console.log(arr.join(' '));