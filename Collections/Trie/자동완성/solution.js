class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.pathCount = 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let curNode = this.root;
    for (const char of string) {
      if (!curNode.children.has(char)) {
        curNode.children.set(char, new Node(curNode.value + char));
      } else {
        curNode.children.get(char).pathCount += 1;
      }
      curNode = curNode.children.get(char);
    }
  }

  has(string) {
    let curNode = this.root;
    for (const char of string) {
      if (!curNode.children.has(char)) {
        return false;
      }
      curNode = curNode.children.get(char);
    }
    return true;
  }

  display(string) {
    let curNode = this.root;
    const list = [];
    for (const char of string) {
      curNode = curNode.children.get(char);
      list.push(curNode.pathCount);
    }

    return list;
  }
}

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let cnt = 0;
  for (let word of words) {
    const list = trie.display(word);
    if (list[list.length - 1] !== 1) {
      cnt += word.length;
    } else {
      cnt += list.filter((v) => v !== 1).length + 1;
    }
  }

  console.log(cnt);
}

solution(["go", "gone", "guild"]);
