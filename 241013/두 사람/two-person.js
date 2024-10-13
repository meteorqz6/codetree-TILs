const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a_age = Number(input[0].split(' ')[0]);
let a_gender = input[0].split(' ')[1];
let b_age = Number(input[1].split(' ')[0]);
let b_gender = input[1].split(' ')[1];

if(a_age>=19&&a_gender=='M' || b_age>=19&&b_gender=='M') {
    console.log(1);
} else {
    console.log(0);
}