const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...input] = fs.readFileSync(path).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    ++this.size;
  }

  sizeLength() {
    return this.size;
  }

  pop() {
    if (!this.head) return -1;
    const popValue = this.head;
    this.head = this.head.next;
    this.size--;
    return popValue.value;
  }

  empty() {
    if (this.size > 0) {
      return 0;
    } else {
      return 1;
    }
  }

  front() {
    if (this.size > 0) {
      return this.head.value;
    } else {
      return -1;
    }
  }

  back() {
    if (this.size > 0) {
      return this.tail.value;
    } else {
      return -1;
    }
  }
}

function solution(n, situations) {
  let answer = [];
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    let situation = situations[i].split(" ")[0];
    switch (situation) {
      case "push": {
        const value = situations[i].split(" ")[1];
        queue.push(value);
        break;
      }
      case "pop": {
        answer.push(queue.pop());
        break;
      }
      case "size": {
        answer.push(queue.sizeLength());
        break;
      }
      case "front": {
        answer.push(queue.front());
        break;
      }
      case "back": {
        answer.push(queue.back());
        break;
      }
      case "empty": {
        answer.push(queue.empty());
        break;
      }
    }
  }
  return answer;
}

const res = solution(N, input);
console.log(res.join("\n"));