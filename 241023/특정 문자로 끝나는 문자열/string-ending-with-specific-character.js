const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const char = input[10];
let cnt = 0;

for(let i = 0; i < 10; i++){
    let len = input[i].length;
    if(input[i][len-1] === char){
        console.log(input[i]);
        cnt++;
    }
}

if(cnt===0){
    console.log('None');
}