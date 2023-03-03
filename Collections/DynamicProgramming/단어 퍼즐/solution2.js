//조금 더 최적화 해보았다.
function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);
  const wordSets = new Set(strs);

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;
    for (let j = 1; j < Math.min(i + 1, 6); j++) {
      if (wordSets.has(t.slice(i - j, i))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
