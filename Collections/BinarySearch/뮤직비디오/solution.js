const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, m, arr) {
  let left = Math.max(...arr);
  let right = 10000000;
  let res = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let sum = 0;
    let cnt = 1;

    for (value of arr) {
      sum += value;
      if (sum > mid) {
        cnt += 1;
        sum = value;
      }
    }

    if (cnt > m) {
      left = mid + 1;
    } else {
      res = mid;
      right = mid - 1;
    }
  }

  console.log(res);
}

solution(n, m, arr);
