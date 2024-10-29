const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const str1 = input[0];
const str2 = input[1];
let numStr1 = "";
let numStr2 = "";

for(let i = 0; i < str1.length; i++){
    
    if(!('0'<=str1[i]&&str1[i]<='9')){
        break;
    }
    numStr1 += str1[i];
}

for(let i = 0; i < str2.length; i++){
    
    if(!('0'<=str2[i]&&str2[i]<='9')){
        break;
    }
    numStr2 += str2[i];
}

console.log(Number(numStr1)+Number(numStr2));