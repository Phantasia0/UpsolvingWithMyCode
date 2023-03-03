//플로이드 워샬
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = [];
arr.unshift([0, 0]);
for (let i = 1; i < input.length - 1; i++) {
  arr[i] = Array.from(input[i].trim().split(" ")).map((v) => parseInt(v));
}

function solution(n, arr) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (let [src, dest] of arr) {
    dp[src][dest] = 1;
    dp[dest][src] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    dp[i][i] = 0;
  }

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  const res = Array(n + 1).fill(0);
  let score = 100;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      res[i] = Math.max(res[i], dp[i][j]);
    }
    score = Math.min(score, res[i]);
  }

  const output = [];
  for (let i = 1; i < n + 1; i++) {
    if (res[i] === score) {
      output.push(i);
    }
  }

  console.log(score, output.length);
  console.log(output.join(" "));
}

solution(n, arr);
