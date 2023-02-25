const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("");

function solution(input) {
  const stack = [];
  let string = "";

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      string += input[i];
    } else {
      if (input[i] === "(") {
        stack.push(input[i]);
      }

      if (input[i] === "*" || input[i] === "/") {
        while (
          stack.length > 0 &&
          (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
        ) {
          string += stack.pop();
        }
        stack.push(input[i]);
      }

      if (input[i] === "+" || input[i] === "-") {
        while (stack.length > 0) {
          if (stack[stack.length - 1] === "(") {
            break;
          }
          string += stack.pop();
        }
        stack.push(input[i]);
      }

      if (input[i] === ")") {
        while (stack.length > 0) {
          string += stack.pop();
          if (stack[stack.length - 1] === "(") {
            stack.pop();
            break;
          }
        }
      }
    }
  }

  while (stack.length > 0) {
    string += stack.pop();
  }

  console.log(string);
}

solution(input);
