const fs = require('fs');
 const input = fs.readFileSync(0).toString().trim().split('\n');

 function getnum(input){
    let str = "";
    for(let i = 0; i <input.length; i++){
        if('0'<=input[i]&&input[i]<='9'){
            str+=input[i];
        }
    }
    return str;
 }

 let numstr1 = getnum(input[0]);
 let numstr2 = getnum(input[1]);

 console.log(Number(numstr1)+Number(numstr2));