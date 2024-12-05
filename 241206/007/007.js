class Rule {
    constructor(sc, mp, t) {
        this.sc = sc;
        this.mp = mp;
        this.t = t;
    }
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
const rule1 = new Rule(input[0], input[1], input[2]);

console.log(`secret code : ${rule1.sc}`);
console.log(`meeting point : ${rule1.mp}`);
console.log(`time : ${rule1.t}`);