class Bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [code, color, second] = input.split(' ');

let bomb1 = new Bomb(code, color, Number(second));
console.log(`code : ${bomb1.code}`);
console.log(`color : ${bomb1.color}`);
console.log(`second : ${bomb1.second}`);