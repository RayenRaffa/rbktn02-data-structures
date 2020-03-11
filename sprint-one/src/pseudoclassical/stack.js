var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};


Stack.prototype.push = function(value) {
	this.storage[this.size()] = value;
};
Stack.prototype.pop = function() {
	let top = this.size() - 1;
	let element = this.storage[top];
	delete this.storage[top];
	return element;
};
Stack.prototype.size = function() {
	return Object.keys(this.storage).length;
};