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

function solution(priorities, location) {
  const queue = new Queue();
  const pr = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue({ value: priorities[i], idx: i });
    pr.push(priorities[i]);
  }

  pr.sort((a, b) => b - a);

  let cnt = 0;
  while (queue.size() > 0) {
    const temp = queue.dequeue();
    if (temp.value !== pr[cnt]) {
      queue.enqueue(temp);
    } else {
      cnt += 1;
      if (temp.idx === location) {
        break;
      }
    }
  }

  console.log(cnt);
}

solution([1, 1, 9, 1, 1, 1], 0);
