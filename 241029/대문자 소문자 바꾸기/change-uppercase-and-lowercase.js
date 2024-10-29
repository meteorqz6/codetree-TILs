const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let str = "";

for(let i = 0; i < input.length; i++){
    if('a'<=input[i]&&input[i]<='z'){
        str += input[i].toUpperCase();
    }
    else if('A'<=input[i]&&input[i]<='Z'){
        str += input[i].toLowerCase();
    }
}
console.log(str);