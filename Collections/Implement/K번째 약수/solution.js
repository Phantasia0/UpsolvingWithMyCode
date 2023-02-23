const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

const [n, k] = input.map((v) => parseInt(v));

function solution(n, k) {
  const list = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      list.push(i);
    }
  }

  if (list.length < k) {
    console.log(-1);
    return;
  }

  console.log(list[k - 1]);
}

solution(n, k);
