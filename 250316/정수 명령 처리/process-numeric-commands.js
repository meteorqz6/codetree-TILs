const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

class Stack {
    constructor () {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    empty() {
        return (this.items.length === 0 ? 1: 0);
    }

    size() {
        return this.items.length;
    }

    pop() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items.pop();
    }

    top() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items[this.items.length - 1];
    }
}

const s = new Stack();
const result = [];

for (let i = 0; i < n; i++) {
    if (commands[i].startsWith('push')) {
        const value = Number(commands[i].split(' ')[1]);
        s.push(value);
    } else if (commands[i] === 'pop') {
        result.push(s.pop());
    } else if (commands[i] === 'size') {
        result.push(s.size());
    } else if (commands[i] === 'empty') {
        result.push(s.empty());
    } else if (commands[i] === 'top') {
        result.push(s.top());
    }
}

console.log(result.join('\n'));