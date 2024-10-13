const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
if(a<=b&&b<=c || c<=b&&b<=a){
    console.log(b);
} else if(b<=a&&a<=c || c<=a&&a<=b){
    console.log(a);
} else {
    console.log(c);
}