const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const l = parseInt(input[0].trim());
const arr = Array.from(input[1].trim().split(" ")).map((v) => parseInt(v));
const m = parseInt(input[2].trim());

function solution(l, arr, m) {
  for (let i = 0; i < m; i++) {
    const maxIdx = arr.indexOf(Math.max(...arr));
    const minIdx = arr.indexOf(Math.min(...arr));

    arr[maxIdx] -= 1;
    arr[minIdx] += 1;
  }

  console.log(Math.max(...arr) - Math.min(...arr));
}

solution(l, arr, m);

//Heap 구조를 통해 시간복잡도 더 줄일수 있다.
