const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

const num = parseInt(n);
const arr = inputArr.map((v) => parseInt(v));

// or I am convenience with This

const inputs = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

//입력에 맞게 끔 형태 변경
// const n = parseInt(input[0]);
// const arr = Array.from(Array(n), () => []);
// const r = parseInt(input[n + 1]);
// const rot = Array.from(Array(r), () => []);

// for (let i = 0; i < n; i++) {
//   arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
// }

// for (let i = 0; i < r; i++) {
//   rot[i] = Array.from(input[i + n + 2].trim().split(" ")).map((v) =>
//     parseInt(v)
//   );
// }