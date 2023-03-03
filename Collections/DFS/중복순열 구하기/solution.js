const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));

cnt = 0;
function DFS(L, res) {
  if (L === m) {
    console.log(res.join(" "));
    cnt++;
  } else {
    for (let i = 1; i < n + 1; i++) {
      res.push(i);
      DFS(L + 1, res);
      res.pop();
    }
  }
}

function solution(n, m) {
  const res = [];
  DFS(0, res);
  console.log(cnt);
}

solution(n, m);
