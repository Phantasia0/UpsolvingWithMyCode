function combinations(n, arr) {
  if (n === 1) {
    return arr.map((v) => [v]);
  }

  const result = [];

  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx + 1);

    const combins = combinations(n - 1, rest);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function solution(numbers) {
  const result = combinations(2, numbers);

  result.forEach((v, idx, arr) => {
    arr[idx] = v.reduce((acc, cur) => acc + cur);
  });

  console.log(
    result.filter((v, idx) => result.indexOf(v) === idx).sort((a, b) => a - b)
  );
}

solution([2, 1, 3, 4, 1]);
