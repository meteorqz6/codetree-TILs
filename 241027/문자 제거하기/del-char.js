const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let str = input[0];
let i = 1;

while(str.length!==1){
    if(Number(input[i])>=str.length){
        str = str.slice(0,-1);
    } else{
        str = str.slice(0,Number(input[i])) + str.slice(Number(input[i])+1);
    }
    i++;
    console.log(str);
}