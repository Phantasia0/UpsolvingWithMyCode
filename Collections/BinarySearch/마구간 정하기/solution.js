const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, c] = Array.from(input[0].toString().trim().split(" ")).map((v) =>
  parseInt(v)
);

const arr = Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(input[i + 1].toString().trim());
}

function solution(n, c, arr) {
  arr.sort((a, b) => a - b);
  let left = 1;
  let right = 1000000000;
  let res = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cnt = 1;
    let ep = arr[0];

    for (let i = 1; i < n; i++) {
      if (arr[i] - ep >= mid) {
        cnt += 1;
        ep = arr[i];
      }
    }

    if (cnt >= c) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(res);
}

solution(n, c, arr);
