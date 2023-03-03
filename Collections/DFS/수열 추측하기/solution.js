const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, f] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const check = Array(n + 1).fill(0);
const p = Array(n).fill(0);
const b = Array(n).fill(1);
//이항계수
for (let i = 1; i < n; i++) {
  b[i] = Math.floor((b[i - 1] * (n - i)) / i);
}

breakFunc = false;

function DFS(L, sum) {
  if (breakFunc) {
    return;
  }

  if (L === n && sum === f) {
    console.log(p.join(" "));
    breakFunc = true;
  } else {
    for (let i = 1; i < n + 1; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        p[L] = i;
        DFS(L + 1, sum + p[L] * b[L]);
        check[i] = 0;
      }
    }
  }
}

function solution(n, f) {
  DFS(0, 0);
}

solution(n, f);
