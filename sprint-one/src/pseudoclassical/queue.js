var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
	let firstIndex = Object.keys(this.storage)[0]; 
	this.storage[firstIndex+this.size()] = value;
};
Queue.prototype.dequeue = function() {
    let element =this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return element;
};

Queue.prototype.size = function() {

	return Object.keys(this.storage).length;
};
