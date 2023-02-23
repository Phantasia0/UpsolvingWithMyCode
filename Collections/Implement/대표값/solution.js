const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

function solution(n, arr) {
  const avg = Math.round(arr.reduce((acc, cur) => acc + cur) / n);

  const list = [];
  let i = 1;
  for (let value of arr) {
    list.push({ value, i });
    i += 1;
  }

  let minN = Infinity;
  for (let data of list) {
    minN = Math.min(minN, Math.abs(data.value - avg));
  }

  res = [];
  for (let data of list) {
    if (minN === Math.abs(data.value - avg)) {
      res.push(data);
    }
  }

  res.sort((a, b) => {
    if (b.value - a.value > 0) {
      return 1;
    } else if (b.value - a.value < 0) {
      return -1;
    } else {
      if (a.i - b.i > 0) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  console.log(avg, res[0].i);
}

solution(num, arr);
