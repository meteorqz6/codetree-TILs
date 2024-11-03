const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let arr = [];
arr[0] = 1;
arr[1] = n;

for(let i = 2; ; i++) {
    arr[i] = arr[i-1] + arr[i-2];
    if(arr[i] > 100){
        break;
    }
}
console.log(arr.join(' '));