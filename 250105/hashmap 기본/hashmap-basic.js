const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const m = new Map();

for (let i = 1; i <= n; i++) {
    let commmand = input[i].split(' ')[0];
    let key = Number(input[i].split(' ')[1]);

    if (commmand === 'add') {
        let value = Number(input[i].split(' ')[2]);
        m.set(key, value);
    } else if (commmand === 'find') {
        if (m.has(key)) {
            console.log(m.get(key));
        } else {
            console.log('None');
        }
    } else if (commmand === 'remove') {
        m.delete(key);
    }
}