const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(Array(n), () => []);
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

function solution(n, arr) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    res = Math.max(res, sum1, sum2);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i];
    res = Math.max(res, sum);
  }

  sum = 0;
  for (let j = n - 1; j >= 0; j--) {
    sum += arr[j][n - 1 - j];
    res = Math.max(res, sum);
  }

  console.log(res);
}

solution(n, arr);
