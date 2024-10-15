const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for( let i = 1; i <= n ; i++ ){
    let str = String(i);
    let arr = [...str];
    if(i%3===0 || arr.includes('3') || arr.includes('6') || arr.includes('9')){
        result += (0 + ' ');
    } else {
        result += (i + ' ');
    }
}
console.log(result);