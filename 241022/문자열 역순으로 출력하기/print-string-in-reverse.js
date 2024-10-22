const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const result = input.reverse();
for(str of result){
    console.log(str);
}