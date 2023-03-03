const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
const m = parseInt(input[2].trim());

const res = Array(k).fill(0);
cnt = 0;

function DFS(L, s, sum) {
  if (L === k) {
    if (sum % m === 0) {
      cnt++;
    }
  } else {
    for (let i = s; i < n; i++) {
      res[L] = arr[i];
      DFS(L + 1, i + 1, sum + res[L]);
    }
  }
}

function solution(n, k, arr, m) {
  DFS(0, 0, 0);
  console.log(cnt);
}

solution(n, k, arr, m);
