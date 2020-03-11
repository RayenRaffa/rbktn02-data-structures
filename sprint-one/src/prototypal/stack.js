var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {}; 

  return someInstance
};

var stackMethods = {};


stackMethods.push = function(value) {
	this.storage[this.size()] = value;
};
stackMethods.pop = function() {
	let top = this.size() - 1;
	let element = this.storage[top];
	delete this.storage[top];
	return element;
};
stackMethods.size = function() {
	let stor = this.storage; 
	return Object.keys(stor).length;
};