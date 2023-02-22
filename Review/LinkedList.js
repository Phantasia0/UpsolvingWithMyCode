class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  find(value) {
    let curNode = this.head;
    while (curNode !== null && curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
    this.size += 1;
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) {
      if (prevNode.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = prevNode.next;
      }
      this.size -= 1;
      return;
    }

    while (prevNode.next.value !== value && prevNode !== null) {
      prevNode = prevNode.next;
    }

    if (prevNode !== null) {
      prevNode.next = prevNode.next.next;
      this.size -= 1;
    } else {
      return;
    }
  }

  display() {
    let curNode = this.head;
    while (curNode !== null) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  find(value) {
    let curNode = this.head;
    while (curNode !== null && curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(node, value) {
    const newNode = new DNode(value);
    if (node.next !== null) {
      node.next.prev = newNode;
      newNode.prev = node;
      newNode.next = node.next;
      node.next = newNode;
    } else {
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
    }
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) {
      if (prevNode.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = prevNode.next;
        prevNode.next.prev = null;
        prevNode.next = null;
      }
      return;
    }

    while (prevNode !== null && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode !== null) {
      prevNode.next = prevNode.next.next;
      if (prevNode.next !== null) {
        prevNode.next.prev = prevNode;
      } else {
        prevNode.next = null;
        this.tail = prevNode;
      }
    } else {
      return;
    }
  }

  display() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}
