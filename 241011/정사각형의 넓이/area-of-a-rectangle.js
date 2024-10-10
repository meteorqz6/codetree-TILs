const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());
console.log(input**2);
if(input<5){
    console.log('tiny');
}