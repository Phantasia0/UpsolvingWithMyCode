const fs = require("fs");
const [ns, inputss] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = inputss.trim().split(" ");

const num = parseInt(n);
const arrs = inputArr.map((v) => parseInt(v));

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


//Question Form Reference <<< 귀찮아서 복사 이후 입력에 맞게 끔 형태 변경 or 변수명 변경
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n,arr){
    
}

