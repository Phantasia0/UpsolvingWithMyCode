const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

function solution(n, arr) {
  const avg = Math.round(arr.reduce((acc, cur) => acc + cur) / n);

  let min = Infinity;
  let score = 0;
  let res = 0;

  for (value of arr) {
    tmp = Math.abs(value - avg);
    if (tmp < min) {
      min = tmp;
      score = value;
      res = arr.indexOf(value) + 1;
    } else if (tmp === min) {
      if (value > score) {
        score = value;
        res = arr.indexOf(value) + 1;
      }
    }
  }

  console.log(avg, res);
}

solution(num, arr);
