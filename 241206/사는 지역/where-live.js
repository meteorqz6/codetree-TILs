class Address {
    constructor(name, addr, city) {
        this.name = name;
        this.addr = addr;
        this.city = city;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let address = [];

for (let i = 1; i <= n; i++) {
    let [name, addr, city] = input[i].split(' ');
    address.push(new Address(name, addr, city));
}

let idx = 0;

for (let i = 1; i < n; i++) {
    if(address[i].name > address[idx].name) {
        idx = i;
    }
}
console.log(`name ${address[idx].name}`);
console.log(`addr ${address[idx].addr}`);
console.log(`city ${address[idx].city}`);