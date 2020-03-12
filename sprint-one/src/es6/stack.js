class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage={};
  }
  push(value) {
  	this.storage[this.size()] = value;
  }
  pop() {
  	let top = this.size() - 1;
  	let element = this.storage[top];
  	delete this.storage[top];
  	return element;
  }
  size() {
  	return Object.keys(this.storage).length;
  }

}