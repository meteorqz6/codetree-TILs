const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
let x = 0;
let y = 0;
let dirNum;

for (let i = 1; i <= A; i++) {
    let direction = input[i].split(' ')[0];
    let distance = Number(input[i].split(' ')[1]);
    switch (direction) {
        case "E": {
            dirNum = 0;
            break;
        }
        case "N": {
            dirNum = 1;
            break;
        }
        case "W": {
            dirNum = 2;
            break;
        }
        case "S": {
            dirNum = 3;
            break;
        }
        default: {
            break;
        }
    }
    let dx = [distance, 0, -distance, 0];
    let dy = [0, distance, 0, -distance];
    x += dx[dirNum];
    y += dy[dirNum];
}

console.log(x, y);