let res = "";

function DFS(L) {
  if (L > 7) {
    return;
  } else {
    // console.log(L);
    // DFS(2 * L);
    // DFS(2 * L + 1);
    // DFS(2 * L);
    // console.log(L);
    // DFS(2 * L + 1);
    DFS(2 * L);
    DFS(2 * L + 1);
    console.log(L);
  }
}

function solution() {
  DFS(1);
}

solution();
