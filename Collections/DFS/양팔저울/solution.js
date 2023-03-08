const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const k = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

const res = new Set();
const total = arr.reduce((acc, cur) => acc + cur, 0);

function DFS(L, sum) {
  if (L === k) {
    if (sum <= total && sum > 0) {
      res.add(sum);
    }
  } else {
    DFS(L + 1, sum + arr[L]);
    DFS(L + 1, sum);
    DFS(L + 1, sum - arr[L]);
  }
}

function solution(k, arr) {
  DFS(0, 0);
  console.log(total - res.size);
}

solution(k, arr);
