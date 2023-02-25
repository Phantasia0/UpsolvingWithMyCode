const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, arr) {
  const list = Array(n + 1).fill(0);
  const check = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 1; j < n + 1; j++) {
      if (check[j] === 1) {
        continue;
      }
      if (cnt === arr[i]) {
        list[j] = i + 1;
        check[j] = 1;
        break;
      }

      if (list[j] === 0) {
        cnt += 1;
      }
    }
  }

  list.shift();
  console.log(list.join(" "));
}

solution(n, arr);
