const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = input[0].trim().split(' ');
let b = input[1].trim().split(' ');
let result = "";

for(let value of a){
    result += value;
}

for(let value of b){
    result += value;
}

console.log(result);