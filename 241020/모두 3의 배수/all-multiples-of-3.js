const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let satisfied = 1;

for(let i = 0; i < 5; i++){
    if(Number(input[i])%3!==0){
        satisfied = 0;
    }
}

console.log(satisfied);