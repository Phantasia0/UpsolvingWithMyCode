const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("");

function solution(input) {
  const stack = [];
  let cnt = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else {
      stack.pop();
      if (input[i - 1] === "(") {
        cnt += stack.length;
      } else {
        cnt += 1;
      }
    }
  }

  console.log(cnt);
}

solution(input);
