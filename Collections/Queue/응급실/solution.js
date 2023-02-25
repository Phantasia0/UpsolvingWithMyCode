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

  size() {
    return this.rear - this.front;
  }
}

function solution(n, m, arr) {
  const Q = new Queue();
  const priority = [];
  for (let i = 0; i < n; i++) {
    Q.enqueue({ value: arr[i], idx: i });
    priority.push(arr[i]);
  }

  priority.sort((a, b) => b - a);

  let cnt = 0;
  while (Q.size() > 0) {
    const temp = Q.dequeue();
    if (temp.value !== priority[cnt]) {
      Q.enqueue(temp);
    } else {
      cnt += 1;
      if (temp.idx === m) {
        break;
      }
    }
  }

  console.log(cnt);
}

solution(n, m, arr);
