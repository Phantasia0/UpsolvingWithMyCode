const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [k, n] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array(k);

for (let i = 0; i < k; i++) {
  arr[i] = parseInt(input[i + 1].trim());
}

function solution(k, n, arr) {
  let left = 1;
  let right = 10000000000;
  let sum = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    sum = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (sum >= n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(left - 1);
}

solution(k, n, arr);
