const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const inputArr = input.map((v) => v.trim().split(" "));
const arr = inputArr.map((v) => v.map((x) => parseInt(x)));
const num = parseInt(n);

function solution(num, arr) {
  let res = 0;
  for (let i = 0; i < num; i++) {
    arr[i].sort((a, b) => a - b);
    let sum = 0;
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      sum = arr[i][0] * 1000 + 10000;
    } else if (arr[i][0] === arr[i][1] || arr[i][0] === arr[i][2]) {
      sum = arr[i][0] * 100 + 1000;
    } else if (arr[i][1] === arr[i][2]) {
      sum = arr[i][1] * 100 + 1000;
    } else {
      sum = arr[i][2] * 100;
    }

    if (sum > res) {
      res = sum;
    }
  }

  console.log(res);
}

solution(num, arr);
