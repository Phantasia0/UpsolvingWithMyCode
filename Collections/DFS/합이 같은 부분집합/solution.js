const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

check = false;
total = arr.reduce((acc, cur) => acc + cur);

function DFS(L, res, tsum) {
  if (res.length > 0) {
    const sum = res.reduce((acc, cur) => acc + cur);
    if (sum > total - tsum) {
      return;
    }
  }

  if (L === n) {
    if (res.length > 0) {
      const sum = res.reduce((acc, cur) => acc + cur);
      if (sum === total - sum) {
        check = true;
      }
    }
  } else {
    res.push(arr[L]);
    DFS(L + 1, res, tsum + arr[L]);
    res.pop();
    DFS(L + 1, res, tsum - arr[L]);
  }
}

function solution(n, arr) {
  //const check = Array(n+1).fill(0);
  const res = [];

  DFS(0, res, 0);

  if (check) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

solution(n, arr);
