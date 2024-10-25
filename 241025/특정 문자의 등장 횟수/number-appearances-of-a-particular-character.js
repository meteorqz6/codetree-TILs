const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const len = input.length;
let cntee = 0;
let cnteb = 0;

for(let i = 0; i < len - 1; i++) {
    if(input[i] === "e" && input[i+1] === "e"){
        cntee++;
    }
    if(input[i] === "e" && input[i+1] === "b"){
        cnteb++;
    }
}

console.log(cntee, cnteb);