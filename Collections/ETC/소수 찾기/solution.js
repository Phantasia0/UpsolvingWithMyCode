function solution(n) {
  //전개 연산자 사용시 Array 스택 초과 런타임 오류 발생할 수 있다
  //const isPrime = Array(false, false, ...Array(n - 1).fill(true));

  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter((v) => v === true).length;
}

solution(25);
