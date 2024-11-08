const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = [];

let n = 4;
for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

const rowSums = arr2d.map((row) => row.reduce((sum, value) => sum + value, 0));

rowSums.forEach(sum => console.log(sum));