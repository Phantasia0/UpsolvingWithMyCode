const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));

function solution(n, arr) {}

solution(n, arr);
