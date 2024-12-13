class Position {
    constructor(x, y, number, distance) {
        this.x = x;
        this.y = y;
        this.number = number;
        this.distance = distance;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
let positions = [];

for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    let distance = Math.abs(x - 0) + Math.abs(y - 0);
    positions.push(new Position(x, y, i, distance));
}

positions.sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    return a.number - b.number;
})

for (let i = 0; i < n; i++) {
    console.log(positions[i].number);
}