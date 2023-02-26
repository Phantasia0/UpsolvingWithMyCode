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

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  const queue = new Queue();

  for (let [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const dist = Array(n + 1).fill(0);
  dist[1] = 1;

  queue.enqueue(1);

  while (queue.size() > 0) {
    const src = queue.dequeue();
    for (let dest of graph[src]) {
      if (dist[dest] === 0) {
        queue.enqueue(dest);
        dist[dest] = dist[src] + 1;
      }
    }
  }

  return dist.filter((v) => v === Math.max(...dist)).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
