const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let index = 0;

while (true) {
    let a = Number(input[index].split(' ')[0]);
    let b = Number(input[index].split(' ')[1]);
    console.log(a*b);
    if(input[index].split(' ')[2] === 'C'){
        break;
    }
    index++;
}