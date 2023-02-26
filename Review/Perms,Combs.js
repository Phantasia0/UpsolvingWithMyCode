function permutations(arr, n) {
  if (n === 1) {
    return arr.map((v) => [v]);
  }

  const result = [];

  arr.forEach((fixed, idx) => {
    const rest = arr.filter((_, i) => i !== idx);

    const perms = permutations(n - 1, rest);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function combinations(arr, n) {
  if (n === 1) {
    return arr.map((v) => [v]);
  }

  const result = [];

  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx + 1);

    const combins = combinations(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
