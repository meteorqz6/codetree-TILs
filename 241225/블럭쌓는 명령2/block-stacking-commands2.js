const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let arr = Array(N).fill(0);

for (let i = 1; i <= K; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    for(let j = start; j <= end; j++) {
        arr[j - 1] += 1;
    }
}

console.log(Math.max(...arr));