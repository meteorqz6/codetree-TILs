const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let cnt_room = 0;
let cnt_hallway = 0;
let cnt_toilet = 0;
for(let i = 1; i <= n; i++){
    if(i%12===0){
        cnt_toilet++;
    } else if(i%3===0 && i%12!==0){
        cnt_hallway++;
    } else if(i%2===0 && i%3!==0 && i%12!==0){
        cnt_room++;
    }
}
console.log(cnt_room, cnt_hallway, cnt_toilet);