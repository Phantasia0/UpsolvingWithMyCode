const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [Array(10), () => []];
for (let i = 0; i < 10; i++) {
  arr[i] = Array.from(input[i].trim().split(" ")).map((v) => parseInt(v));
}

function solution(arr) {
  const list = Array.from({ length: 20 }, (_, i) => i + 1);

  for (let i = 0; i < 10; i++) {
    for (
      let j = arr[i][0] - 1;
      j < Math.floor((arr[i][1] + arr[i][0]) / 2);
      j++
    ) {
      [list[j], list[arr[i][0] + arr[i][1] - 2 - j]] = [
        list[arr[i][0] + arr[i][1] - 2 - j],
        list[j],
      ];
    }
  }

  console.log(list.join(" "));
}

solution(arr);
