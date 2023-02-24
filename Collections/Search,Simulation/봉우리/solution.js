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
  arr.unshift(Array(n).fill(0));
  arr.push(Array(n).fill(0));
  for (let i = 0; i < n + 2; i++) {
    arr[i].unshift(0);
    arr[i].push(0);
  }

  dx = [0, -1, 0, 1];
  dy = [1, 0, -1, 0];
  let cnt = 0;
  let isHigh = false;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      isHigh = false;
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if (arr[i][j] > arr[x][y]) {
          isHigh = true;
        } else {
          isHigh = false;
          break;
        }
      }
      if (isHigh) {
        cnt += 1;
      }
    }
  }

  console.log(cnt);
}

solution(n, arr);
