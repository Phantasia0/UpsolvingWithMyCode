const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [c, n] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(input[i + 1].trim());
}

function DFS(L, weight, tsum) {
  if (weight + total - tsum < res) {
    return;
  }

  if (weight > c) {
    return;
  }

  if (L === n) {
    if (weight > res) {
      res = weight;
    }
  } else {
    DFS(L + 1, weight + arr[L], tsum + arr[L]);
    DFS(L + 1, weight, tsum + arr[L]);
  }
}

function solution(c, n, arr) {
  res = -2147000000;
  total = arr.reduce((acc, cur) => acc + cur);
  DFS(0, 0, 0);
  console.log(res);
}

solution(c, n, arr);
