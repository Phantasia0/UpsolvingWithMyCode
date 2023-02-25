const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, arr) {
  const list = [];
  let res = "";
  let min = Math.min(arr[0], arr[arr.length - 1]);
  list.push(min);
  if (min === arr[0]) {
    res += "L";
    arr.shift();
  } else {
    res += "R";
    arr.pop();
  }

  for (let i = 1; i < n; i++) {
    let min = Math.min(arr[0], arr[arr.length - 1]);
    if (min > list[list.length - 1]) {
      list.push(min);
      if (min === arr[0]) {
        res += "L";
        arr.shift();
      } else {
        res += "R";
        arr.pop();
      }
    } else {
      let max = Math.max(arr[0], arr[arr.length - 1]);
      if (max > list[list.length - 1]) {
        list.push(max);
        if (max === arr[0]) {
          res += "L";
          arr.shift();
        } else {
          res += "R";
          arr.pop();
        }
      } else {
        break;
      }
    }
  }

  console.log(list);
  console.log(res);
}

solution(n, arr);
