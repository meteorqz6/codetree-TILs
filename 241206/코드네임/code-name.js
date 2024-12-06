class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let users = Array(5).fill(new User());
for (let i = 0; i < 5; i++) {
    let name = input[i].split(' ')[0];
    let score = Number(input[i].split(' ')[1]);
    users[i] = new User(name, score);
}

let name = users[0].name;
let min = users[0].score;

for (let i = 1; i < 5; i++) {
    if (min > users[i].score) {
        name = users[i].name;
        min = users[i].score;
    }
}

console.log(name, min);
