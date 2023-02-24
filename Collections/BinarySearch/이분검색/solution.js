const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = n - 1;
  let res = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < m) {
      left = mid + 1;
    } else if (arr[mid] > m) {
      right = mid - 1;
    } else {
      res = mid;
      break;
    }
  }

  console.log(res + 1);
}

solution(n, m, arr);
