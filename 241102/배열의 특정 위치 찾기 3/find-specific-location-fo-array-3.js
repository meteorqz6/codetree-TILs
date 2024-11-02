const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let idx; 
let sum = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] === 0){
        idx = i;
        break;
    }
}

sum = input[idx-1] + input[idx-2] + input[idx-3];
console.log(sum);