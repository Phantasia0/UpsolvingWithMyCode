const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0].trim();
const b = input[1].trim();

function solution(a, b) {
  const aTable = new Map();
  const bTable = new Map();

  for (let char of a) {
    if (!aTable.has(char)) {
      aTable.set(char, 1);
    } else {
      aTable.set(char, aTable.get(char) + 1);
    }
  }

  for (let char of b) {
    if (!bTable.has(char)) {
      bTable.set(char, 1);
    } else {
      bTable.set(char, bTable.get(char) + 1);
    }
  }

  let isTrue = true;
  for (let char of a) {
    if (aTable.get(char) !== bTable.get(char)) {
      console.log("NO");
      isTrue = false;
      break;
    }
  }

  if (isTrue) {
    console.log("YES");
  }
}

solution(a, b);
