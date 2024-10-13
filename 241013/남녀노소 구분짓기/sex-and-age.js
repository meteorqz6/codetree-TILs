const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a = Number(input[0]);
let b = Number(input[1]);
if(b>=19){
    if(a===0){
        console.log('MAN');
    } else {
        console.log('WOMAN');
    }
} else {
    if(a===0){
        console.log('BOY');
    } else {
        console.log('GIRL');
    }
}