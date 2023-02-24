const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(Array(5), () => []);
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

function solution(n, arr) {
  arr.sort((a, b) => b[0] - a[0]);

  let cnt = 0;
  let largest = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    largest = arr[i][1];
    cnt += 1;
    if (res >= n - i) {
      break;
    }
    for (let j = i + 1; j < n; j++) {
      if (arr[j][1] > largest) {
        largest = arr[j][1];
        cnt += 1;
      }
    }
    res = Math.max(res, cnt);

    cnt = 0;
  }

  console.log(res);
}

solution(n, arr);
//이중 포문 Version
