//플로이드 워샬
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = [];
for (let i = 0; i < m; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

function solution(n, m, arr) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
  for (let [src, dest, cost] of arr) {
    dp[src][dest] = cost;
    //dp[dest][src] = cost;
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

  let string = "";

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (dp[i][j] === Infinity) {
        string += "M ";
      } else {
        string += dp[i][j].toString() + " ";
      }
    }
    string += "\n";
  }

  console.log(string);
}

solution(n, m, arr);
