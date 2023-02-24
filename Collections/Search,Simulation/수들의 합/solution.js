const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, m, arr) {
  let s = 0;
  let e = 0;

  let cnt = 0;
  while (s < n && e < n) {
    let sum = 0;
    for (let i = s; i < e + 1; i++) {
      sum += arr[i];
    }

    if (sum > m) {
      s += 1;
    } else if (sum < m) {
      e += 1;
    } else {
      cnt += 1;
      e += 1;
    }
  }

  console.log(cnt);
}

solution(n, m, arr);
