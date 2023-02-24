const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = Array.from(Array(7), () => []);

for (let i = 0; i < 7; i++) {
  arr[i] = Array.from(input[i].trim().split(" ")).map((v) => parseInt(v));
}

function solution(arr) {
  let cnt = 0;
  for (let i = 0; i < 7; i++) {
    for (let j = 2; j < 5; j++) {
      if (arr[i][j - 2] === arr[i][j + 2] && arr[i][j - 1] === arr[i][j + 1]) {
        cnt += 1;
      }
    }
  }

  for (let i = 2; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      if (arr[i - 2][j] === arr[i + 2][j] && arr[i - 1][j] === arr[i + 1][j]) {
        cnt += 1;
      }
    }
  }

  console.log(cnt);
}

solution(arr);
