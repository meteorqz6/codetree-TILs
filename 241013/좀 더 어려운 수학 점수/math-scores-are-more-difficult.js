const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let a1 = Number(input[0].split(' ')[0]);
let a2 = Number(input[0].split(' ')[1]);
let b1 = Number(input[1].split(' ')[0]);
let b2 = Number(input[1].split(' ')[1]);

if(a1>b1){
    console.log('A');
} else if(a1<b1){
    console.log('B');
} else {
    if(a2>b2){
        console.log('A');
    } else if(a2<b2){
        console.log('B');
    }
}