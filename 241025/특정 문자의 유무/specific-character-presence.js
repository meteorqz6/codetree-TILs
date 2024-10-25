const fs = require('fs');;
const str = fs.readFileSync(0).toString();
let ee = 'No';
let ab = 'No';
if(str.includes('ee')){
    ee = 'Yes';
}
if(str.includes('ab')){
    ab = 'Yes';
}
console.log(ee, ab);