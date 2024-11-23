const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let result = [];

for (let i = 0; i < n; i++) {
    // 첫 번째 요소인 경우
    if (i === 0 && arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
    }
    // 마지막 요소인 경우
    else if (i === n - 1 && arr[i] !== arr[i - 1]) {
        result.push(arr[i]);
    }
    // 중간 요소인 경우
    else if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
    }
}

if (result.length === 0) {
    console.log(-1);
} else {
    console.log(Math.max(...result));
}
