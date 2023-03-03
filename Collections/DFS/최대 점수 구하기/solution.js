const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

max = 0;
function DFS(L, sum, time) {
  if (time > m) {
    return;
  }

  if (L === n && time <= m) {
    max = Math.max(sum, max);
  } else {
    DFS(L + 1, sum + arr[L][0], time + arr[L][1]);
    DFS(L + 1, sum, time);
  }
}

function solution(n, m, arr) {
  DFS(0, 0, 0);
  console.log(max);
}

solution(n, m, arr);
