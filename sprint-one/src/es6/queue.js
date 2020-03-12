class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }
  enqueue(value) {
  	let firstIndex = Object.keys(this.storage)[0]; 
  	this.storage[firstIndex+this.size()] = value;
  }
  dequeue() {
  	let element =this.storage[Object.keys(this.storage)[0]];
  	delete this.storage[Object.keys(this.storage)[0]];
  	return element;

  }
  size() {

  	return Object.keys(this.storage).length;
  }
}
