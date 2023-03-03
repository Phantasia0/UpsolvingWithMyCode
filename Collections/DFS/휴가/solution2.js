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

function DFS(L, sum) {
  if (L === n + 1) {
    if (sum > max) {
      max = sum;
    }
  } else {
    if (L + arr[L][0] <= n + 1) {
      DFS(L + arr[L][0], sum + arr[L][1]);
    }
    DFS(L + 1, sum);
  }
}

function solution(n, arr) {
  DFS(1, 0);
  console.log(max);
}

solution(n, arr);
