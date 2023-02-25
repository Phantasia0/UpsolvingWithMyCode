/*
        Various Solutions
 */

function solution(s) {
  let check = 0;
  for (let char of s) {
    char === "(" ? check++ : check--;
    if (check < 0) return false;
  }
  return check === 0 ? true : false;
}

function solution(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
