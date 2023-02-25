const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const list = [];
for (let i = 0; i < n; i++) {
  list[i] = input[i + 1].trim();
}
const words = [];
for (let i = 0; i < n - 1; i++) {
  words[i] = input[i + n + 1].trim();
}

function solution(n, list, words) {
  const table = new Map();
  for (let value of list) {
    if (!table.has(value)) {
      table.set(value, 0);
    }
  }

  for (let word of words) {
    table.set(word, table.get(word) + 1);
  }

  let res = "";
  for (let value of list) {
    const temp = table.get(value);
    if (temp === 0) {
      res = value;
    }
  }

  console.log(res);
}

solution(n, list, words);
