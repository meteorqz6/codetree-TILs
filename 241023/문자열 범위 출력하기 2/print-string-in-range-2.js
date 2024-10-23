const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
const n = Number(input[1]);

if(n>str.length){
    console.log(str.split('').reverse().join(''));
} else{
    console.log(str.slice(str.length-n).split('').reverse().join(''));
}