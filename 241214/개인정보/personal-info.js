class User {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
let users = [];
for (let i = 0; i < 5; i++) {
    let [name, height, weight] = input[i].split(' ');
    users.push(new User(name, Number(height), Number(weight)));
}

// 이름 순 정렬
users.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});


console.log('name');
for (let i = 0; i < 5; i++) {
    console.log(users[i].name, users[i].height, users[i].weight.toFixed(1));
}

users.sort((a, b) => {
    return b.height - a.height;
});

console.log();
console.log('height');
for (let i = 0; i < 5; i++) {
    console.log(users[i].name, users[i].height, users[i].weight.toFixed(1));
}
