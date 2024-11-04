const word = ['L', 'E', 'B', 'R', 'O', 'S'];
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let idx = -1;

for(let i = 0; i < word.length; i++) {
    if(input===word[i]) {
        idx = i;
    }
}

if(idx === -1) {
    console.log('None');
}
else {
    console.log(idx);
}