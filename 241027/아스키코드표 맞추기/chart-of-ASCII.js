const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let result = "";
for(let i = 0; i < 5; i++){
    result = result + String.fromCharCode(Number(input[i])) + ' ';
}

console.log(result);