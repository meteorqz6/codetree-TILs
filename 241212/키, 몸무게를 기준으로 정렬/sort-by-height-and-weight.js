class User {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

function cmp(a, b) {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }
    return a.height - b.height;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
let users = [];

for (let i = 1; i <= n; i++) {
    let [name, height, weight] = input[i].split(' ');
    users.push(new User(name, Number(height), Number(weight)));
}

users.sort(cmp);

for (let i = 0; i < n; i++) {
    console.log(users[i].name + " " + users[i].height + " " + users[i].weight);
}
