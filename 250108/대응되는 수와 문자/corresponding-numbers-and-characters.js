const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = new Map();
const reverseMap = new Map();

for (let i = 1; i <= n; i++) {
    let str = input[i];
    
    map.set(str, i);
    reverseMap.set(i, str);
}

for (let i = n + 1; i <= n + m; i++) {
    let numOrStr = input[i];

    if (isNaN(numOrStr)) {
        console.log(map.get(numOrStr));
    } else {
        numOrStr = Number(numOrStr);
        console.log(reverseMap.get(numOrStr));
    }
}
