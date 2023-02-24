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
  let s = Math.floor(n / 2);
  let e = Math.floor(n / 2);

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = s; j < e + 1; j++) {
      res += arr[i][j];
    }

    if (i < Math.floor(n / 2)) {
      s -= 1;
      e += 1;
    } else {
      s += 1;
      e -= 1;
    }
  }

  console.log(res);
}

solution(n, arr);
