const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
for (let i = 1; i <= n; i++){
    let num = Number(input[i]);
    if(num%2!==0 && num%3===0){
        console.log(num);
    }
}