const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const ness = Array.from(input[0].trim().split(""));
const n = parseInt(input[1].trim());
const list = [];
for (let i = 0; i < n; i++) {
  list[i] = Array.from(input[i + 2].trim().split(""));
}

function solution(ness, n, list) {
  for (let i = 0; i < n; i++) {
    const set = new Set(list[i]);
    const arr = Array.from(set.values()).filter((v) => {
      for (let value of ness) {
        if (value === v) {
          return true;
        }
      }
      return false;
    });

    if (arr.join("") === ness.join("")) {
      console.log(`#${i + 1} YES`);
    } else {
      console.log(`#${i + 1} NO`);
    }
  }
}

solution(ness, n, list);
