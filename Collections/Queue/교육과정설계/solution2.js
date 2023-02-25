const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const ness = Array.from(input[0].trim().split(""));
const n = parseInt(input[1].trim());
const list = [];
for (let i = 0; i < n; i++) {
  list[i] = Array.from(input[i + 2].trim().split(""));
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(ness, n, list) {
  for (let i = 0; i < n; i++) {
    const Q = new Queue();

    for (let char of ness) {
      Q.enqueue(char);
    }

    let isBreak = false;

    for (let char of list[i]) {
      if (Q.queue.includes(char)) {
        if (char !== Q.dequeue()) {
          console.log(`#${i + 1} NO`);
          isBreak = true;
          break;
        }
      }
    }

    if (!isBreak) {
      if (Q.size() === 0) {
        console.log(`#${i + 1} YES`);
      } else {
        console.log(`#${i + 1} NO`);
      }
    }
  }
}

solution(ness, n, list);
