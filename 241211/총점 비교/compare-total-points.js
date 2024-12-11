class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp(a, b) {
    return (a.kor + a.eng + a.math) - (b.kor + b.eng + b.math);
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
let students = [];

for (let i = 1; i <= n; i++) {
    let [name, kor, eng, math] = input[i].split(' ');
    students.push(new Student(name, Number(kor), Number(eng), Number(math)));
}

students.sort(cmp);

for (let i = 0; i < n; i++) {
    console.log(students[i].name + " " + students[i].kor + " " + students[i].eng + " " + students[i].math);
}

