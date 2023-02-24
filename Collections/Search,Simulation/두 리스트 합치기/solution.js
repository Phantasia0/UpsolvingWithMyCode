const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const nlist = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
const m = parseInt(input[2]);
const mlist = Array.from(input[3].trim().split(" ")).map((v) => parseInt(v));

function solution(n, nlist, m, mlist) {
  let p1 = 0;
  let p2 = 0;

  let list = [];
  while (p1 < n && p2 < m) {
    if (nlist[p1] <= mlist[p2]) {
      list.push(nlist[p1]);
      p1 += 1;
    } else {
      list.push(mlist[p2]);
      p2 += 1;
    }
  }

  if (p1 === n) {
    for (let i = p2; i < m; i++) {
      list.push(mlist[i]);
    }
  } else {
    for (let i = p1; i < n; i++) {
      list.push(nlist[i]);
    }
  }

  console.log(list);
}

solution(n, nlist, m, mlist);
