const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = Array(4).fill(0);

for(let i = 0; i < 3; i++) {
    let isCold = input[i].split(' ')[0];
    let temperature = input[i].split(' ')[1];

    if(isCold === "Y" && Number(temperature) >= 37) {
        arr[0]++;
    } else if(isCold === "N" && Number(temperature) >= 37) {
        arr[1]++;
    } else if(isCold === "Y") {
        arr[2]++;
    } else {
        arr[3]++;
    }
}

if(arr[0] >= 2) {
    console.log(arr.join(' ') + ' E');
} else {
    console.log(arr.join(' '));
}