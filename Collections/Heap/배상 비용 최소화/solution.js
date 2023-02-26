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

    while (parIdx !== 0 && this.heap[curIdx] > this.heap[parIdx]) {
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
      (this.heap[lIdx] && this.heap[lIdx] > this.heap[curIdx]) ||
      (this.heap[rIdx] && this.heap[rIdx] > this.heap[curIdx])
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
      lIdx = 2 * curIdx;
      rIdx = 2 * curIdx + 1;
    }
    return value;
  }
}

function solution(no, works) {
  const heap = new MaxHeap();

  for (let work of works) {
    heap.push(work);
  }

  let temp = 0;
  while (no > 0) {
    temp = heap.pop();
    if (temp !== 0) {
      heap.push(temp - 1);
    } else {
      break;
    }
    no--;
  }

  console.log(heap.heap.reduce((acc, cur) => acc + cur * cur, 0));
}

solution(4, [4, 3, 3]);
