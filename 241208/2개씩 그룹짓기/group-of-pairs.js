const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let maxSum = 0;
let left = 0;
let right = n * 2 - 1;

// console.log(arr);
while (left < right) {
    let newMaxSum = arr[left] + arr[right];
    if (maxSum < newMaxSum) {
        maxSum = newMaxSum;
    }
    // console.log(maxSum);
    left++;
    right--;
}

console.log(maxSum);