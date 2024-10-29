const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');
let str = '';

for(let i = 0; i < input.length; i++){
    if(('a'<=input[i]&&input[i]<='z') || ('0'<=input[i]&&input[i]<='9') || ('A'<=input[i]&&input[i]<='Z')){
        str += input[i];
    }
}
console.log(str.toLowerCase());