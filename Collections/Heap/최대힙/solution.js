class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);
    while (parIdx !== 0 && this.heap[parIdx] < this.heap[curIdx]) {
      this._swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let lIdx = 2;
    let rIdx = 3;

    while (
      (this.heap[lIdx] && this.heap[curIdx] < this.heap[lIdx]) ||
      (this.heap[rIdx] && this.heap[curIdx] < this.heap[rIdx])
    ) {
      if (this.heap[rIdx] === undefined) {
        this._swap(lIdx, curIdx);
        curIdx = lIdx;
      } else if (this.heap[rIdx] <= this.heap[lIdx]) {
        this._swap(lIdx, curIdx);
        curIdx = lIdx;
      } else if (this.heap[rIdx] > this.heap[lIdx]) {
        this._swap(rIdx, curIdx);
        curIdx = rIdx;
      }

      lIdx = curIdx * 2;
      rIdx = curIdx * 2 + 1;
    }

    return value;
  }
}

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const list = [];
let cnt = 0;
while (true) {
  const num = parseInt(input[cnt].trim());
  if (num === -1) break;
  list.push(num);
  cnt++;
}

function solution(list) {
  const heap = new MaxHeap();
  for (let value of list) {
    heap.push(value);
    if (value === 0) {
      console.log(heap.pop());
    }
  }
}

solution(list);
