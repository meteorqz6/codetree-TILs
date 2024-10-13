const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());
let result = "";
for(let i = 1; i<=5; i++){
    result += (i*input + ' ');
}
console.log(result);