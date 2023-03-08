const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const T = parseInt(input[0].trim());
const k = parseInt(input[1].trim());
const arr = [];
for (let i = 0; i < k; i++) {
  arr[i] = Array.from(
    input[i + 2]
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

count = 0;
function DFS(L, sum) {
  if (sum > T) {
    return;
  }
  if (L === k) {
    if (sum === T) {
      count++;
    }
  } else {
    for (let i = 0; i < arr[L][1] + 1; i++) {
      DFS(L + 1, sum + arr[L][0] * i);
    }
  }
}

function solution(T, k, arr) {
  DFS(0, 0);
  console.log(count);
}

solution(T, k, arr);
