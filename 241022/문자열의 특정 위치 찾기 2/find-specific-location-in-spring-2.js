const fs = require('fs');
const char = fs.readFileSync(0).toString().trim();
const arr = ["apple", "banana", "grape", "blueberry", "orange"];
let cnt = 0;

for(str of arr){
    if(str[2] === char || str[3] === char){
        cnt++;
        console.log(str);
    }
}
console.log(cnt);