const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

let cnt = 0;
let res = 0;
//const list = [];

function DFS(s, weight) {
  if (s < 0) return;

  if (cnt + n - s <= res) {
    cnt -= 1;
    s -= 1;
    return;
  }

  for (let i = s; i < n; i++) {
    if (arr[i][1] > weight) {
      cnt += 1;
      //list.push(arr[i][1]);
      DFS(i + 1, arr[i][1]);
      //list.pop();
    }
  }

  res = Math.max(res, cnt);
  //console.log(list);
  cnt -= 1;
}

function solution(n, arr) {
  arr.sort((a, b) => b[0] - a[0]);

  DFS(0, 0);

  console.log(res);
}

solution(n, arr);

//DFS 백트래킹 가지치기
