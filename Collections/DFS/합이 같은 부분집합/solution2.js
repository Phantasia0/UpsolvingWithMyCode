//개선 버전
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

breakFunc = false;
total = arr.reduce((acc, cur) => acc + cur);
function DFS(L, sum) {
  if (breakFunc) {
    return;
  }

  if (sum > Math.floor(total / 2)) {
    return;
  }

  if (L === n) {
    if (sum === total - sum) {
      breakFunc = true;
    }
  } else {
    DFS(L + 1, sum + arr[L]);
    DFS(L + 1, sum);
  }
}

function solution(n, arr) {
  DFS(0, 0);

  if (breakFunc) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

solution(n, arr);
