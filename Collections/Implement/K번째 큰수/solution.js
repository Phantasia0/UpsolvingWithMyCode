const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map((v) => parseInt(v));
const arr = input[1].split(" ").map((v) => parseInt(v));

function solution(n, k, arr) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        set.add(arr[i] + arr[j] + arr[s]);
      }
    }
  }

  const list = Array.from(set);
  list.sort((a, b) => b - a);
  console.log(list[k - 1]);
}

solution(n, k, arr);
