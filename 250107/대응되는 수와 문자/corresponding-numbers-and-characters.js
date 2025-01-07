const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = new Map();

for (let i = 1; i <= n; i++) {
    let str = input[i];

    map.set(str, i);
}

for (let i = n + 1; i <= n + m; i++) {
    let numOrStr = input[i];
    // console.log(typeof(numOrStr));
    if (isNaN(numOrStr)) {
        console.log(map.get(numOrStr));
        // console.log('문자열이야');
    } else {
        numOrStr = Number(input[i]);
        // console.log('숫자야');
        // value로 key를 찾는 코드 추가
        for (let [key, value] of map.entries()) {
            if (value === numOrStr) {
                console.log(key);
                break;
            }
        }
    }
}
