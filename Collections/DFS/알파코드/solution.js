const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

cnt = 0;
word = "";
const pwd = Array.from(
  input[0]
    .trim()
    .split("")
    .map((v) => parseInt(v))
);
const n = pwd.length;
const res = Array(n + 3).fill(0);
const answer = [];

pwd.push(-1);

function DFS(L, P) {
  if (L === n) {
    cnt++;
    word = "";
    for (let i = 0; i < P; i++) {
      word += String.fromCharCode(res[i] + 64);
    }
    answer.push(word);
  } else {
    for (let i = 1; i < 27; i++) {
      if (pwd[L] === i) {
        res[P] = i;
        DFS(L + 1, P + 1);
      } else if (i >= 10 && pwd[L] === Math.floor(i / 10) && pwd[L + 1] === i % 10) {
        res[P] = i;
        DFS(L + 2, P + 1);
      }
    }
  }
}

function solution(pwd) {
  DFS(0, 0);
  for(let char of answer){
    console.log(char);
  }
  console.log(cnt);
}

solution(pwd);
