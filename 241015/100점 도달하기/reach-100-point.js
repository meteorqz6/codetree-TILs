const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for( let i = n; i <= 100; i++ ){
    if(i>=90){
        result += ('A' + ' ');
    } else if(80<=i&&i<90){
        result += ('B' + ' ');
    } else if(70<=i&&i<80){
        result += ('C' + ' ');
    } else if(60<=i&&i<70){
        result += ('D' + ' ');
    } else {
        result += ('F' + ' ');
    }
}
console.log(result);