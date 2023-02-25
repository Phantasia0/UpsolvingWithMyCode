const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const k = parseInt(input[0].trim());
const arr = Array.from(input[1].trim()).map((v) => parseInt(v));

function solution(k, arr) {
  const stack = [];
  let cnt = 0;
  stack.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= stack[stack.length - 1]) {
      stack.push(arr[i]);
    } else {
      while (stack.length > 0) {
        if (cnt == k) {
          break;
        }
        const temp = stack[stack.length - 1];
        if (temp >= arr[i]) {
          break;
        } else {
          cnt += 1;
          stack.pop();
        }
      }
      stack.push(arr[i]);
    }
  }

  console.log(stack.slice(0, stack.length - (k - cnt)).join(""));
}

solution(k, arr);
