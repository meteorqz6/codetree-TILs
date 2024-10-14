const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());
let i = 1;
let result = "";
while(i<=input) {
    result += ( i + " ");
    i++;
}
console.log(result);