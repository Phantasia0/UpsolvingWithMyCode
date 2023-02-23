const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

function reverse(x) {
  let t;
  let res = 0;
  while (x > 0) {
    t = x % 10;
    res = 10 * res + t;
    x = Math.floor(x / 10);
  }

  return res;
}

function isPrime(x) {
  if (x === 1) {
    return false;
  }

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, arr) {
  let res = "";
  for (value of arr) {
    let temp = reverse(value);
    if (isPrime(temp)) {
      res += temp;
      res += " ";
    }
  }
  res = res.trim();

  console.log(res);
}

solution(num, arr);
