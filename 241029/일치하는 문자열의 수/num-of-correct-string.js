const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input[0].split(' ')[0];
const str = input[0].split(' ')[1];
let cnt = 0;

for(let i = 1; i <= n; i++){
    if(str===input[i]){
        cnt++;
    }
}

console.log(cnt);