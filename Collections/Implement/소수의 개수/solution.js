const fs = require("fs");
const n = fs.readFileSync("input.txt").toString().trim();

const num = parseInt(n);

function solution(num) {
  const isPrime = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  console.log(isPrime.filter((v) => v === true).length);
}

solution(num);
