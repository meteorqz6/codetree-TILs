const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let satisfied = 'N';

for(let i = 2; i < n; i++){
    if(n%i===0){
        satisfied = 'C';
    }
}

console.log(satisfied);