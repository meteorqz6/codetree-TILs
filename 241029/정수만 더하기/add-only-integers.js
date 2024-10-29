const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let sum = 0;

for(let i = 0; i < input.length; i++){
    if('0'<=input[i] && input[i]<='9'){
        sum += Number(input[i]);
    }
}
console.log(sum);