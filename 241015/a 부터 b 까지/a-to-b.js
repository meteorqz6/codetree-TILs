const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let result = "";

for(let i = a; i <= b; ){
    result += ( i + ' ');

    if(i%2!==0){
        i *= 2;
    } else {
        i += 3;
    }
}
console.log(result);