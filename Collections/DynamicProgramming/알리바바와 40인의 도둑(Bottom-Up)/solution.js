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

function solution(n, arr) {
  const dist = Array.from(Array(n), () => Array(n).fill(0));

  dist[0][0] = arr[0][0];
  for (let j = 1; j < n; j++) {
    dist[0][j] = dist[0][j - 1] + arr[0][j];
    dist[j][0] = dist[j - 1][0] + arr[j][0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      dist[i][j] = Math.min(dist[i - 1][j], dist[i][j - 1]) + arr[i][j];
    }
  }

  console.log(dist[n - 1][n - 1]);
}

solution(n, arr);
