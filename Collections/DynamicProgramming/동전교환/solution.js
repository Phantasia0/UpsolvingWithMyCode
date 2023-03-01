const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
const m = parseInt(input[2]);

function solution(n, arr, m) {
  const dp = Array(m + 1).fill(Infinity);
  arr.sort((a, b) => b - a);
  dp[0] = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (j >= arr[i]) {
        dp[j] = Math.min(dp[j - arr[i]] + 1, dp[j]);
      }
    }
  }

  console.log(dp[m]);
}

solution(n, arr, m);
