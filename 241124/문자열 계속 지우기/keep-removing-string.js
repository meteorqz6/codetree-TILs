const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let [strA, strB] = input;
const lenB = strB.length;

while (strA.length > lenB) {
    const idx = strA.indexOf(strB); // strB가 strA에 존재하는 첫 위치 찾기
    if (idx === -1) break;         // strB가 더 이상 존재하지 않으면 종료
    strA = strA.slice(0, idx) + strA.slice(idx + lenB); // strB 제거
}

console.log(strA === strB ? '' : strA);
