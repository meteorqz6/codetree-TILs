const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;
for(let i = 1; ; i++){
    n = parseInt(n/i);
    cnt++;
    if(n<=1){
        console.log(cnt);
        break;
    }
}