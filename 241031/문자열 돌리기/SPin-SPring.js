const fs = require('fs');
let str = fs.readFileSync(0).toString().trim();
const len = str.length;
console.log(str);
for(let i = 0; i < len; i++){
    console.log(str.slice(-1)+str.slice(0,len-1));
    str = str.slice(-1)+str.slice(0,len-1);
}