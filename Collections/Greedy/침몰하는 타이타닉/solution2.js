const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

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

  pop() {
    const value = this.queue[this.rear - 1];
    delete this.queue[this.rear - 1];
    this.rear--;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, m, arr) {
  let cnt = 0;
  const queue = new Queue();

  arr.sort((a, b) => a - b);

  for (let value of arr) {
    queue.enqueue(value);
  }

  while (queue.size() > 0) {
    if (queue.size() === 1) {
      cnt += 1;
      break;
    }

    if (queue.queue[queue.front] + queue.queue[queue.rear - 1] > m) {
      queue.pop();
      cnt += 1;
    } else {
      queue.pop();
      queue.dequeue();
      cnt += 1;
    }
  }

  console.log(cnt);
}

solution(n, m, arr);
