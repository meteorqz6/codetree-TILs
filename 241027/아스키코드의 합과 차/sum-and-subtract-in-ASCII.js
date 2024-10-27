const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const firstChar = input[0];
const secondChar = input[1];
let sum;
let sub;
sum = firstChar.charCodeAt() + secondChar.charCodeAt();
if(firstChar.charCodeAt() >= secondChar.charCodeAt()){
    sub = firstChar.charCodeAt() - secondChar.charCodeAt();
} else {
    sub = secondChar.charCodeAt() - firstChar.charCodeAt();
}
console.log(sum, sub);