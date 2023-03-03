const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const edge = [];
for (let i = 0; i < m; i++) {
  edge[i] = Array.from(
    input[i + 1]
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
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

function solution(n, m, edge) {
  const degree = Array(n + 1).fill(0);
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const queue = new Queue();

  for (let [src, dest] of edge) {
    graph[src][dest] = 1;
    degree[dest] += 1;
  }

  for (let i = 1; i < n + 1; i++) {
    if (degree[i] === 0) {
      queue.enqueue(i);
    }
  }

  let res = "";
  while (queue.size() > 0) {
    const src = queue.dequeue();
    res += src.toString() + " ";
    for (let i = 1; i < n + 1; i++) {
      if (graph[src][i] === 1) {
        degree[i] -= 1;
        if (degree[i] === 0) {
          queue.enqueue(i);
        }
      }
    }
  }

  console.log(res);
}

solution(n, m, edge);
