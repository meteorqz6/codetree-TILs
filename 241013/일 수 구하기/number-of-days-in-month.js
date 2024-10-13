const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if(input===1||input===3||input===5||input===7||input===8||input===10||input===12){
    console.log(31);
} else if(input===4||input===6||input===9||input===11){
    console.log(30);
} else {
    console.log(28);
}