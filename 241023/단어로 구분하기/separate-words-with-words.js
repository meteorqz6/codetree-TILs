const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
for(let i = 0; i < 10; i++){
    console.log(input[i]);
}