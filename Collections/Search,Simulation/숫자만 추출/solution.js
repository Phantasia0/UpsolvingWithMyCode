const input = require("fs").readFileSync("input.txt").toString().trim();

function solution(str) {
  string = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      string += str[i];
    }
  }

  const num = parseInt(string);
  let cnt = 0;
  for (i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      cnt += 1;
    }
  }

  console.log(num);
  console.log(cnt);
}

solution(input);
