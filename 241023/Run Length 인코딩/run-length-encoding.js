const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = input[0];
let char = input[0];
let cnt = 1;

for(let i = 1; i < input.length; i++){
    if(input[i] === char){
        cnt++;
    } else{
        char = input[i];
        result += cnt.toString();
        result += char;
        cnt = 1;
    }
}
result += cnt.toString();
console.log(result.length);
console.log(result);