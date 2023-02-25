const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("");

function solution(input) {
  const list = [];
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      temp1 = list.pop();
      temp2 = list.pop();
      if (input[i] === "+") {
        list.push(temp2 + temp1);
      } else if (input[i] === "-") {
        list.push(temp2 - temp1);
      } else if (input[i] === "*") {
        list.push(temp2 * temp1);
      } else if (input[i] === "/") {
        list.push(temp2 / temp1);
      }
    } else {
      list.push(parseInt(input[i]));
    }
  }

  console.log(list[0]);
}

solution(input);
