const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let maxVal = input[0];

for(let i = 1; i < input.length; i++){
    if(input[i] > maxVal){
        maxVal = input[i];
    }
}

console.log(maxVal);