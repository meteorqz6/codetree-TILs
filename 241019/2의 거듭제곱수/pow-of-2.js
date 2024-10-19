const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

while(true){
    if(input === 1){
        console.log(cnt);
        break;
    }
    input /= 2;
    cnt++;
}