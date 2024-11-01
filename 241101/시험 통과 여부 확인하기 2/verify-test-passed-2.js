const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input[0];
let arr = [];
let cnt = 0;
let sum = 0;

for(let i = 1; i <=n ; i++){
    arr = [];
    sum = 0;
    for(let j = 0; j < 4; j++){
        arr.push(Number(input[i].split(' ')[j]));
        sum += Number(input[i].split(' ')[j]);
    }
    if(sum/4 >= 60){
        cnt++;
        console.log("pass");
    } else{
        console.log("fail");
    }
}

console.log(cnt);