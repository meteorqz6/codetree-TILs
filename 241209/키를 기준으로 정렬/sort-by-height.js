function cmp(prev, cur) {
    return prev.height - cur.height;
}

class User {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}


const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let users = [];

for (let i = 1; i <= n; i++) {
    let [name, height, weight] = input[i].split(' ');
    height = Number(height);
    weight = Number(weight);
    users.push(new User(name, height, weight));
}

users.sort(cmp);
for (let i = 0; i < n; i++) {
    console.log(users[i].name, users[i].height, users[i].weight);
}