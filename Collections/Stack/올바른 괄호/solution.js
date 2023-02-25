function solution(s) {
  const stack = [];
  let cnt = 0;
  for (let char of s) {
    if (char === "(") {
      stack.push(char);
      cnt += 1;
    } else {
      if (stack.length === 0 || cnt < 0) {
        return false;
      }
      stack.pop();
      cnt -= 1;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
