const fs = require("fs");
const [n, m] = fs.readFileSync("input.txt").toString().trim().split(" ");

const num = parseInt(n);
const mNum = parseInt(m);

function solution(n, m) {
  const list = Array.from({ length: m + n + 1 }).fill(0);

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      list[i + j] = list[i + j] + 1;
    }
  }

  maxX = -Infinity;
  for (let i = 2; i < n + m + 1; i++) {
    maxX = Math.max(maxX, list[i]);
  }

  res = "";
  for (let i = 2; i < n + m + 1; i++) {
    if (list[i] === maxX) {
      res += i + " ";
    }
  }

  console.log(res);
}

solution(num, mNum);
