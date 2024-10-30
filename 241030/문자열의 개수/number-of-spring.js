const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let cnt = 0;
let arr = [];

for(let i = 0; i < input.length; i++){
    if(input[i]==='0'){
        break;
    }
    arr.push(input[i]);
    cnt++;
}
console.log(cnt);
for(let i = 0; i < arr.length; i+=2){
    console.log(arr[i]);
}