const fs = require("fs");
const [n, m] = fs.readFileSync("input.txt").toString().trim().split(" ");

const num = parseInt(n);
const mNum = parseInt(m);

function solution(n, m) {
  const list = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      list.push(i + j);
    }
  }

  maxX = -247000000;
  let string = "";
  for (let i = 2; i < n + m + 1; i++) {
    temp = list.filter((v) => v === i).length;
    if (temp > maxX) {
      string = "";
      maxX = temp;
      string += i.toString() + " ";
    } else if (temp === maxX) {
      string += i.toString() + " ";
    }
  }

  console.log(string.trim());
}

solution(num, mNum);
