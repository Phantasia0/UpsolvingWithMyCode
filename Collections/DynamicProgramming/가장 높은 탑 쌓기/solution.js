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
arr.unshift([0, 0, 0]);

function solution(n, arr) {
  arr.sort((a, b) => a[0] - b[0]);
  const cv = arr.map((v) => v[2]);
  const dp = Array(n + 1).fill(0);
  dp[1] = arr[1][1];
  let res = 0;

  for (let i = 2; i < n + 1; i++) {
    let max = 0;
    for (let j = i - 1; j > 0; j--) {
      if (cv[i] > cv[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + arr[i][1];

    if (dp[i] > res) {
      res = dp[i];
    }
  }

  console.log(res);
}

solution(n, arr);
