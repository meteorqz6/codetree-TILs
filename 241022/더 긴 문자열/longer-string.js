const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');
const a = input[0].length;
const b = input[1].length;

if(a > b){
    console.log(input[0], a);
} else if(a < b){
    console.log(input[1], b);
} else{
    console.log('same');
}