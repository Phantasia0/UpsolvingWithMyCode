const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}
arr.unshift([0, 0]);

max = 0;
function DFS(sum, s) {
  if (s > n + 1) {
    return;
  }

  if (s <= n + 1) {
    max = Math.max(sum, max);
    for (let i = s; i < n + 1; i++) {
      DFS(sum + arr[i][1], i + arr[i][0]);
    }
  }
}

function solution(n, arr) {
  DFS(0, 1);
  console.log(max);
}

solution(n, arr);
