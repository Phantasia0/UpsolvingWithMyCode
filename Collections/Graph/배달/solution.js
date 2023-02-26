class MinHeap {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (parIdx !== 0 && this.heap[parIdx].cost > this.heap[curIdx].cost) {
      this._swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let lIdx = 2;
    let rIdx = 3;

    while (
      (this.heap[lIdx] && this.heap[curIdx].cost > this.heap[lIdx].cost) ||
      (this.heap[rIdx] && this.heap[curIdx].cost > this.heap[rIdx].cost)
    ) {
      if (this.heap[lIdx] === undefined) {
        this._swap(rIdx, curIdx);
        curIdx = rIdx;
      } else if (this.heap[rIdx] === undefined) {
        this._swap(lIdx, curIdx);
        curIdx = lIdx;
      } else if (this.heap[lIdx].cost > this.heap[rIdx].cost) {
        this._swap(rIdx, curIdx);
        curIdx = rIdx;
      } else if (this.heap[lIdx].cost <= this.heap[rIdx].cost) {
        this._swap(lIdx, curIdx);
        curIdx = lIdx;
      }

      lIdx = curIdx * 2;
      rIdx = curIdx * 2 + 1;
    }

    return value;
  }
}

function dijkstra(road, N) {
  const heap = new MinHeap();
  heap.push({ node: 1, cost: 0 });

  const dist = [...Array(N + 1)].map(() => Infinity);
  dist[1] = 0;

  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();
    for (const [src, dest, cost] of road) {
      const nextCost = currentCost + cost;
      if (src === current && dist[dest] > nextCost) {
        dist[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      } else if (dest === current && dist[src] > nextCost) {
        dist[src] = nextCost;
        heap.push({ node: src, cost: nextCost });
      }
    }
  }

  return dist;
}

function solution(N, road, K) {
  const dist = dijkstra(road, N);
  return dist.filter((v) => v <= K).length;
}

solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);
