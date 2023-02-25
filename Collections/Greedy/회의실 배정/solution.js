const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

function solution(n, arr) {
  arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  console.log(arr);

  let cnt = 0;
  let shortest = 0;
  for (let value of arr) {
    if (value[0] >= shortest) {
      cnt += 1;
      shortest = value[1];
    }
  }

  console.log(cnt);
}

solution(n, arr);
