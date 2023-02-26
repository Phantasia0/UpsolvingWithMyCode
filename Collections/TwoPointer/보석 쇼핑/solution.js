function solution(gems) {
  const total = [...new Set(gems)].length;

  let s = 0;
  let e = 0;
  const gemTable = new Map();
  gemTable.set(gems[0], 1);

  let resS = 0;
  let resE = gems.length;
  while (s <= e && e < gems.length) {
    const now = gemTable.size;
    if (now < total) {
      e += 1;
      gemTable.set(gems[e], 1 + (gemTable.get(gems[e]) || 0));
    } else {
      if (e - s < resE - resS) {
        resS = s;
        resE = e;
      }
      gemTable.set(gems[s], gemTable.get(gems[s]) - 1);
      if (gemTable.get(gems[s]) === 0) {
        gemTable.delete(gems[s]);
      }
      s += 1;
    }
  }

  console.log([resS + 1, resE + 1]);
}

solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]);
