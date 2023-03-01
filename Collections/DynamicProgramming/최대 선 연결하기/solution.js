const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
arr.unshift(0);

function solution(n, arr) {
  const dp = Array(n + 1).fill(0);
  let res = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    let max = 0;
    for (let j = i - 1; j > 0; j--) {
      if (arr[i] > arr[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    if (dp[i] > res) {
      res = dp[i];
    }
  }

  console.log(res);
}

solution(n, arr);
