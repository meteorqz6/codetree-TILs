// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");

// const n = Number(input[0]);
// const arr = input[1].split(" ").map(Number);
// const k = Number(input[2]);

// const numToIndex = new Map();

// for (let i = 0; i < arr.length; i++)
// 	numToIndex.set(arr[i], i + 1);

// console.log(numToIndex.get(k));

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const targetArr = input[2].split(' ').map(Number);
let result = [];

const numToIndex = new Map();

for (let i = 0; i < n; i++) {
    numToIndex.set(arr[i], i + 1);
}

for (let i = 0; i < m; i++) {
    let k = targetArr[i];

    if (numToIndex.has(k)) {
        result.push(numToIndex.get(k));
    } else {
        result.push(0);
    }
}

console.log(result.join(' '));

