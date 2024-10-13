const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

if(a>=90 && b>=95){
    console.log(100000);
} else if(a>=90 && b>=90) {
    console.log(50000);
} else {
    console.log(0);
}