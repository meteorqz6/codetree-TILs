const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let result1; 
let result2;

if(a<=b&&a<=c){
    result1 = 1;
} else {
    result1 = 0;
}

if(a==b&&b==c) {
    result2 = 1;
} else {
    result2 = 0;
}

console.log(result1, result2);