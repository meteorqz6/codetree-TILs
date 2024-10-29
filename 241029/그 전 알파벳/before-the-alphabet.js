const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
if(input==='a'){
    console.log('z');
} else{
    console.log(String.fromCharCode(input.charCodeAt(0)-1));
}