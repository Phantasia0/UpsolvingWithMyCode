function solution(n, times) {
  let left = 1;
  let right = n * Math.max(...times);
  let res = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let cnt = 0;

    cnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (cnt < n) {
      left = mid + 1;
    } else {
      res = mid;
      right = mid - 1;
    }
  }

  console.log(res);
}

solution(6, [7, 10]);
