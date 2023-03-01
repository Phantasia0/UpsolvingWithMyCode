const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const dp = Array(n + 1).fill(0);

function DFS(L) {
  if (dp[L] > 0) {
    return dp[L];
  }

  if (L === 1 || L === 2) {
    return L;
  } else {
    dp[L] = DFS(L - 1) + DFS(L - 2);
    return dp[L];
  }
}

function solution(n) {
  DFS(n);
  console.log(dp[n]);
}

solution(n);
