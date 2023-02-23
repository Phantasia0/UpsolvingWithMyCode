const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

maxX = -Infinity;
function solution(n, arr) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    let sum = 0;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > maxX) {
      maxX = sum;
      res = arr[i];
    }
  }

  console.log(res);
}

solution(num, arr);
