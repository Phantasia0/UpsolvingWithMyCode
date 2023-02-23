const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

function solution(num, arr) {
  let sum = 0;
  let count = 0;
  for (value of arr) {
    if (value === 1) {
      count += 1;
      sum += count;
    } else if (value === 0) {
      count = 0;
    }
  }

  console.log(sum);
}

solution(num, arr);
