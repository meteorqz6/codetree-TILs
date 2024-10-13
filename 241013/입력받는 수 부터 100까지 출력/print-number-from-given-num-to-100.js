const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());
let result = "";
for(let i = input; i<=100; i++){
    result += (i + " ");
}
console.log(result);