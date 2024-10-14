const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());
let result = "";

while (input>=1){
    result += (input + " ");
    input--;
}
console.log(result);