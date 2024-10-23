const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = "";

for(let i = 1; i < input.length; i+=2){
    result += input[i];
}
console.log(result.split('').reverse().join(''));