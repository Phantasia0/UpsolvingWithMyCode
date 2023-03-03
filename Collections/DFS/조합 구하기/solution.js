const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));

const res = Array(m).fill(0);

function DFS(L, s) {
  if (L === m) {
    console.log(res.join(" "));
  } else {
    for (let i = s; i < n + 1; i++) {
      res[L] = i;
      DFS(L + 1, i + 1);
    }
  }
}

function solution(n, m) {
  DFS(0, 1);
}

solution(n, m);
