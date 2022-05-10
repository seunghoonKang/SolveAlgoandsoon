let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

// num = Number(input);
// arr = [];
// for(let i=1; i<=num; i++){
//   arr.push(i);
// }

// arr2 = [];

// function result(){
//   for(let i=0; i<num-1; i++){  
//   arr.shift();
//   arr2 = arr.shift();
//   arr.push(arr2);
// }
//   console.log(Number(arr))
// }

// result();
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

const cards = new LinkedList();


for (let i = 1; i <= input; i++) {
  cards.add(i);
}


while (cards.getSize() !== 1) {
  cards.removeHead();
  cards.add(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());



//https://overcome-the-limits.tistory.com/16 링크드리스트 설명