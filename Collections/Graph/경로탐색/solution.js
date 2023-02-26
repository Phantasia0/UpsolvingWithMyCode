const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = Array.from(input[0].trim().split(" ")).map((v) => parseInt(v));
const arr = [];
for (let i = 0; i < m; i++) {
  arr[i] = Array.from(input[i + 1].trim().split(" ")).map((v) => parseInt(v));
}

function DFS(L) {
  if (L === 5) {
    console.log(list.join(" "));
  } else {
    for (let i = 0; i < graph[L].length; i++) {
      if (check[graph[L][i]] === 0) {
        list.push(graph[L][i]);
        check[graph[L][i]] = 1;
        DFS(graph[L][i]);
        list.pop();
        check[graph[L][i]] = 0;
      }
    }
  }
}

function solution(n, m, arr) {
  graph = Array.from(Array(n + 1), () => []);
  list = [1];
  check = Array(n + 1).fill(0);
  check[1] = 1;

  for (let i = 0; i < m; i++) {
    const src = arr[i][0];
    const dest = arr[i][1];

    graph[src].push(dest);
  }

  DFS(1);
}

solution(n, m, arr);
