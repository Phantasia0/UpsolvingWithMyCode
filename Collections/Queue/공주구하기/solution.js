const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = Array.from(input.toString().trim().split(" ")).map((v) =>
  parseInt(v)
);

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

function solution(n, k) {
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    queue.enqueue(i + 1);
  }

  while (queue.size() > 1) {
    let cnt = 0;
    while (true) {
      queue.enqueue(queue.dequeue());
      cnt++;
      if (cnt === k - 1) {
        queue.dequeue();
        break;
      }
    }
  }

  console.log(queue.queue.join(""));
}

solution(n, k);
