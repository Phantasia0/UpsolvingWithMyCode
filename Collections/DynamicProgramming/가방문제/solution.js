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

function solution(n, m, arr) {
  const dp = Array(m + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = arr[i][0]; j < m + 1; j++) {
      dp[j] = Math.max(dp[j], dp[j - arr[i][0]] + arr[i][1]);
    }
  }

  console.log(dp[m]);
}

solution(n, m, arr);
