const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let arr = [];
let cnt = 0;

for(let i = n; ; i+=n){
    if(i%5===0){
        cnt++;
    }
    arr.push(i);
    if(cnt===2){
        break;
    }
}

console.log(arr.join(' '));