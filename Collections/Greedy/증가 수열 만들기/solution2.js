const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, arr) {
  let list = [];
  let res = "";

  let left = 0;
  let right = n - 1;
  let last = 0;

  while (left <= right) {
    if (arr[left] > last) {
      list.push([arr[left], "L"]);
    }
    if (arr[right] > last) {
      list.push([arr[right], "R"]);
    }
    list.sort((a, b) => a[0] - b[0]);

    if (list.length === 0) {
      break;
    } else {
      res = res + list[0][1];
      last = list[0][0];
      if (list[0][1] === "L") {
        left = left + 1;
      } else {
        right = right + 1;
      }
      list = [];
    }
  }

  console.log(res.length);
  console.log(res);
}

solution(n, arr);
