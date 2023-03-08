const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(input[i + 1]));
}

ans = 22222222;
function DFS(L, sumA, sumB, sumC) {
  if (L === n) {
    if (sumA === sumB || sumB === sumC || sumA === sumC) {
      return;
    }
    const res = Math.max(sumA, sumB, sumC) - Math.min(sumA, sumB, sumC);
    if (res < ans) {
      ans = res;
    }
  } else {
    DFS(L + 1, sumA + arr[L], sumB, sumC);
    DFS(L + 1, sumA, sumB + arr[L], sumC);
    DFS(L + 1, sumA, sumB, sumC + arr[L]);
  }
}

function solution(n, arr) {
  DFS(0, 0, 0, 0);
  console.log(ans);
}

solution(n, arr);
