const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
for(let char of input){
    console.log(char);
}