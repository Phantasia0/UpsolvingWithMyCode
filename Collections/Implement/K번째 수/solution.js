const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;
for (let i = 0; i < input.length - 1; i += 2) {
  const line = input[i + 1].split(" ");
  const [n, s, e, k] = line.map((v) => parseInt(v));
  const list = input[i + 2].split(" ").map((v) => parseInt(v));

  const tList = list.slice(s - 1, e);
  tList.sort((a, b) => a - b);
  count += 1;
  console.log(`#${count} ${tList[k - 1]}`);
}
