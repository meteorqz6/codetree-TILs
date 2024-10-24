const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ');
let str = "";
for(let i = 0; i < n; i++){
    str += arr[i];
}
const len = str.length;
let result = "";
for(let i = 0; i < len; i++){
    result += str[i];
    if((i+1)%5===0){
        console.log(result);
        result = "";
    }
}
console.log(result);