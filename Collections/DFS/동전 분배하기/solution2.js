const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const coin = [];
for (let i = 0; i < n; i++) {
  coin.push(parseInt(input[i + 1]));
}

const res = 2147000000;

function DFS(L, money) {
  if (L === n) {
    const dig = Math.max(money) - Math.min(money);
    if (dig < res) {
      const tmp = new Set();
      for (let value in money) {
        tmp.add(value);
      }
      if (tmp.size === 3) {
        res = dig;
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      money[i] += coin[i];
      DFS(L + 1);
      money[i] -= coin[i];
    }
  }
}

function solution(n, arr) {
  const money = Array.from({ length: 3 }, () => 0);
  DFS(0, money);
}

solution(n, arr);
