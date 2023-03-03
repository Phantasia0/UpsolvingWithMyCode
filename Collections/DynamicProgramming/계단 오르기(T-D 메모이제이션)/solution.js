const input = require("fs").readFileSync("input.txt").toString().trim();
const n = parseInt(input[0]);

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

function DFS(L) {
  if (dp[L] > 0) {
    return dp[L];
  }

  if (L === 1 || L === 2) {
    return dp[L];
  }

  dp[L] = DFS(L - 1) + DFS(L - 2);

  return dp[L];
}

function solution(n) {
  console.log(DFS(n));
}

solution(n);
