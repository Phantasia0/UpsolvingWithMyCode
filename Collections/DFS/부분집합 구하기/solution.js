const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0].trim());

function DFS(L, res) {
  if (L === n) {
    if (res.length > 0) {
      console.log(res.join(" "));
    }
    return;
  } else {
    res.push(L + 1);
    DFS(L + 1, res);
    res.pop();
    DFS(L + 1, res);
  }
}

function solution(n) {
  const res = [];
  DFS(0, res);
}

solution(n);

//내가 생각하는 DFS에 대해서 빠르게 쉽게 문제 푸는 팁 <<
/*
  1.베이스 조건 생각 후 << 무조건 최우선 순위
  2.상태트리 먼저 생각 후 << 1번이 베이스로 수렴하게끔 설계하는데 답이 도출되게 끔 상태트리 생각
  3.전위 조건, 후위 조건 생각하고
  4.전위 조건은 DFS 바로 직전 앞에
  5.후위 조건은 DFS 바로 이후에
  6.그리고 이 모든걸 단, 하나의 경우에 대해서 베이스 코앞 조건에 대해서 생각
  7.그것만 성립하게 만들면 어지간히 꼬아서 낸거 아니면 적중한다. (중위 조건 배제 플레이)

  <마지막으로 파이썬에서는 그냥 함수 안에 global 때려박으면 전역취급 바로 할 수 있어서 겁나 편하지만,
  자바스크립트는 전역취급할꺼 평상시에는 매개변수로 넘기자.
  코딩테스트때는 그냥 타입변수없이 밖에 전역 선언>
*/
