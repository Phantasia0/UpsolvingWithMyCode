const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = Array.from(Array(n), () => []);
const r = parseInt(input[n + 1]);
const rot = Array.from(Array(r), () => []);

for (let i = 0; i < n; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

for (let i = 0; i < r; i++) {
  rot[i] = Array.from(input[i + n + 2].trim().split(" ")).map((v) =>
    parseInt(v)
  );
}

function solution(n, arr, r, rot) {
  for (let i = 0; i < r; i++) {
    if (rot[i][1] == 0) {
      for (let j = 0; j < rot[i][2]; j++) {
        arr[rot[i][0] - 1].push(arr[rot[i][0] - 1].shift());
      }
    } else {
      for (let j = 0; j < rot[i][2]; j++) {
        arr[rot[i][0] - 1].unshift(arr[rot[i][0] - 1].pop());
      }
    }
  }

  let s = 0;
  let e = n;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = s; j < e; j++) {
      res += arr[i][j];
    }

    if (i < Math.floor(n / 2)) {
      s += 1;
      e -= 1;
    } else {
      s -= 1;
      e += 1;
    }
  }

  console.log(res);
}

solution(n, arr, r, rot);
