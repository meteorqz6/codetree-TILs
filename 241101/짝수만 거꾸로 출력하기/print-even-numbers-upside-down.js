const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
const str = input[1].split(' ');
let result = [];
for(let i = 0; i < str.length; i++){
    if(Number(str[i])%2===0){
        result.push(Number(str[i]));
    }
}
console.log(result.reverse().join(' '));