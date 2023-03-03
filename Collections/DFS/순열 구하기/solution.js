const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));

cnt = 0;
function DFS(L, res, check) {
  if (L === m) {
    console.log(res.join(" "));
    cnt += 1;
  } else {
    for (let i = 0; i < n; i++) {
      if (check[i] === 0) {
        res[L] = i + 1;
        check[i] = 1;
        DFS(L + 1, res, check);
        check[i] = 0;
      }
    }
  }
}

function solution(n, m) {
  const res = Array(m).fill(0);
  const check = Array(n).fill(0);
  DFS(0, res, check);
  console.log(cnt);
}

solution(n, m);
