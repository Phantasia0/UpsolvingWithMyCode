const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]);
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}
const dist = Array.from(Array(n), () => Array(n).fill(0));

function DFS(x, y) {
  if (dist[x][y] > 0) {
    return dist[x][y];
  }
  if (x === 0 && y === 0) {
    return arr[0][0];
  } else {
    if (y === 0) {
      dist[x][y] = DFS(x - 1, y) + arr[x][y];
    } else if (x === 0) {
      dist[x][y] = DFS(x, y - 1) + arr[x][y];
    } else {
      dist[x][y] = Math.min(DFS(x - 1, y), DFS(x, y - 1)) + arr[x][y];
    }
    return dist[x][y];
  }
}

function solution(n, arr) {
  console.log(DFS(n - 1, n - 1));
}

solution(n, arr);
