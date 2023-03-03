function solution(strs, t) {
  const n = t.length;
  const dp = Array(n).fill(Infinity);

  for (let i = 0; i < n; i++) {
    const newT = t.slice(0, i + 1);
    if (newT.length === 1) {
      if (strs.includes(newT)) {
        dp[i] = 1;
      }
    } else {
      for (let j = Math.min(newT.length, 5); j >= 0; j--) {
        const rest = newT.slice(-j);
        if (strs.includes(rest)) {
          if (newT.length === rest.length) {
            dp[i] = 1;
          } else {
            dp[i] = Math.min(dp[i], dp[newT.length - rest.length - 1] + 1);
          }
        }
      }
    }
  }
  return dp[n - 1] === Infinity ? -1 : dp[n - 1];
}

const strs = ["ba", "na", "n", "a"];
const t = "banana";

solution(strs, t);

// 이거는 효율성 검사 테스트 실패해서 위처럼 바꾸었다.
// for (let j = 0; j < newT.length; j++) {
//   if (newT.length - j > 5) {
//     continue;
//   }
//   const rest = newT.slice(j, newT.length);

//   if (strs.includes(rest)) {
//     if (newT.length === rest.length) {
//       dp[i] = 1;
//     } else {
//       dp[i] = Math.min(dp[i], dp[newT.length - rest.length - 1] + 1);
//     }
//   }
// }
