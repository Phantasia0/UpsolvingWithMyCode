const input = require("fs").readFileSync("input.txt").toString().split(" ");
const [s, e] = input.map((v) => parseInt(v));

class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
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

function solution(s, e) {
  const queue = new Queue();
  const max = 10000;
  const ch = Array(e + 1).fill(0);
  const dis = Array(e + 1).fill(0);

  ch[s] = 1;
  dis[s] = 0;

  const dx = [-1, 1, 5];

  queue.enqueue(s);
  while (queue.size() > 0) {
    const now = queue.dequeue();
    if (now === e) {
      break;
    }
    for (let i = 0; i < 3; i++) {
      const next = now + dx[i];
      if (1 <= next && next <= max) {
        if (ch[next] === 0) {
          queue.enqueue(next);
          ch[next] = 1;
          dis[next] = dis[now] + 1;
        }
      }
    }
  }

  console.log(dis[e]);
}

solution(s, e);
