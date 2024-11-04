const word = ['L', 'E', 'B', 'R', 'O', 'S'];
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

for(let i = 0; i < word.length; i++) {
    if(input===word[i]) {
        console.log(i);
        break;
    } else {
        console.log('None');
        break;
    }
}