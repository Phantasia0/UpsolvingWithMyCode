const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const k = parseInt(input[0].trim());
const arr = Array.from(input[1].trim()).map((v) => parseInt(v));

function solution(k, arr) {
  const stack = [];
  for (let value of arr) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < value) {
      stack.pop();
      k -= 1;
    }
    stack.push(value);
  }

  console.log(stack.slice(0, stack.length - k).join(""));
}

solution(k, arr);
