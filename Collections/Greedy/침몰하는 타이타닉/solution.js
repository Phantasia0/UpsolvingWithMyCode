const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, m, arr) {
  let cnt = 0;
  const check = Array(n).fill(0);

  arr.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (check[i] === 1) {
      continue;
    } else {
      check[i] = 1;
    }
    for (let j = i + 1; j < n; j++) {
      if (check[j] === 0) {
        if (arr[i] + arr[j] <= m) {
          check[j] = 1;
          break;
        }
      }
    }
    cnt += 1;
  }

  console.log(cnt);
}

solution(n, m, arr);
