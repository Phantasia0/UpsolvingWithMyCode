const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = Array(Array(9), () => []);

for (let i = 0; i < 9; i++) {
  arr[i] = Array.from(input[i].trim().split(" ")).map((v) => parseInt(v));
}

function solution(arr) {
  for (let i = 0; i < 9; i++) {
    const set = new Set(arr[i]);
    if (Array.from(set.values()).length !== 9) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      set.add(arr[j][i]);
    }
    if (Array.from(set.values()).length !== 9) {
      return false;
    }
  }

  for (let k = 0; k < 3; k++) {
    for (let s = 0; s < 3; s++) {
      const set = new Set();
      for (let i = k * 3; i < (k + 1) * 3; i++) {
        for (let j = s * 3; j < (s + 1) * 3; j++) {
          set.add(arr[i][j]);
        }
      }
      if (Array.from(set.values()).length !== 9) {
        return false;
      }
    }
  }

  return true;
}

if (solution(arr)) {
  console.log("YES");
} else {
  console.log("NO");
}
