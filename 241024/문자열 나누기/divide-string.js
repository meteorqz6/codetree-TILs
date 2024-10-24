const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ');
let str = "";
for(let i = 0; i < n; i++){
    str += arr[i];
}
const len = str.length;

for(let i = 0; i < len; i+=5){
    let result = "";
    for(let j = i; j < i+5; j++){
        if(j>len-1) break;
        result += str[j];
    }
    console.log(result);
}