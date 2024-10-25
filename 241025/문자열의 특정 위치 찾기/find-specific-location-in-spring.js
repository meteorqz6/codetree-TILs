const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');
const str = input[0];
const char = input[1];
if(str.indexOf(char)===-1){
    console.log('No');
} else{
    console.log(str.indexOf(char));
}