const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n;
let index = 0;
let cnt = 0;

while(true){
    n = Number(input[index]);

    if(n%2===0){
        console.log(n/2);
        cnt++;
    }
    if(cnt===3){
        break;
    }
    index++;
}