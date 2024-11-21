const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let cnt = 0;
    let num = Number(input[i]);

    while (num != 1) {
        if (num % 2 === 0) {
            num /= 2;
            cnt++;
        } else {
            num = 3 * num + 1;
            cnt++;
        }
    }
    console.log(cnt);
}