const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i + 1].trim());
}

function solution(n, arr) {
  let i = 0;
  for (let string of arr) {
    i += 1;
    if (
      string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
    ) {
      console.log(`#${i} YES`);
    } else {
      console.log(`#${i} NO`);
    }
  }
}

solution(n, arr);
