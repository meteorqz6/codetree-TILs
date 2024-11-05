const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const p = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(Number);
let idx = -1;

for(let i = 2; i < 2 + p; i++) {
    let rule = Number(input[i].split(' ')[0]);

    if(rule === 1) {
        console.log(arr[Number(input[i].split(' ')[1])-1]);
    } else if(rule === 2) {
        for(let j = 0; j < n; j++) {
            if(arr[j] === Number(input[i].split(' ')[1])) {
                idx = j;
                console.log(j + 1);
                break;
            }
        }
        if(idx === -1) console.log(0);

    } else {
        let s = Number(input[i].split(' ')[1]);
        let e = Number(input[i].split(' ')[2]);
        let result = "";
        for(let j = s - 1; j < e; j++) {
            result += arr[j] + ' ';
        }

        console.log(result);
    }
}