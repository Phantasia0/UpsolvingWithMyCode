const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0].trim());

const res = [];
function DFS(L) {
  if (L === 0) {
    console.log(res.reverse().join(""));
  } else {
    if (L % 2 === 0) {
      res.push(0);
    } else {
      res.push(1);
    }
    DFS(Math.floor(L / 2));
  }
}

function solution(n) {
  DFS(n);
}

solution(n);
