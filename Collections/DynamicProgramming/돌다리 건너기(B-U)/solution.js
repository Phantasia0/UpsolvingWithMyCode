const input = require("fs").readFileSync("input.txt").toString().trim();

const n = parseInt(input[0]);

function solution(n) {
  const dp = Array(n + 2).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 2; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n + 1]);
}

solution(n);
