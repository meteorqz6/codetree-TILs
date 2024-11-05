const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n1 = Number(input[0].split(' ')[0]);
const n2 = Number(input[0].split(' ')[1]);
const cnt = n1 - n2 + 1;
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);
let cnt2 = 0;
let result = 'No';

for(let i = 0; i < cnt; i++) {
    
    let partArr = arrA.slice(i, i + n2);
    
    if(cnt2 === n2) {
        result = 'Yes';
        break;
    }
    cnt2 = 0;
    for(let i = 0; i < n2; i++) {
        if(partArr[i] === arrB[i]) {
            cnt2++;
        }
    }
}

console.log(result);