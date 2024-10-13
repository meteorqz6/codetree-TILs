const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let a1 = input[0].split(' ')[0];
let a2 = Number(input[0].split(' ')[1]);
let b1 = input[1].split(' ')[0];
let b2 = Number(input[1].split(' ')[1]);
let c1 = input[2].split(' ')[0];
let c2 = Number(input[2].split(' ')[1]);

if(a1==='Y'&&a2>=37&&b1==='Y'&&b2>=37 || a1==='Y'&&a2>=37&&c1==='Y'&&c2>=37 || c1==='Y'&&c2>=37&&b1==='Y'&&b2>=37 || a1==='Y'&&a2>=37&&b1==='Y'&&b2>=37&&c1==='Y'&&c2>=37 ){
    console.log('E');
} else {
    console.log('N');
}