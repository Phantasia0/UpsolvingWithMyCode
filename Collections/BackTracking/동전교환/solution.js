const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
const m = parseInt(input[2].trim());

function DFS(L, sum) {
  if (L >= res) {
    return;
  }
  if (sum > m) {
    return;
  }
  if (sum === m) {
    if (L < res) {
      res = L;
    }
  } else {
    for (let i = 0; i < n; i++) {
      DFS(L + 1, sum + arr[i]);
    }
  }
}

function solution(n, arr, m) {
  res = 2147000000;
  arr.sort((a, b) => b - a);
  DFS(0, 0);
  console.log(res);
}

solution(n, arr, m);
