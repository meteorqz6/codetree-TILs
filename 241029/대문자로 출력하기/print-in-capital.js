const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');
let str = "";
for(let i = 0; i < input.length; i++){
    if(('A'<=input[i] && input[i]<='Z')||('a'<=input[i] && input[i]<='z')){
        str += input[i];
    }
}
console.log(str.toUpperCase());