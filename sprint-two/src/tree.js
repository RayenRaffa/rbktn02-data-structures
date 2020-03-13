var Tree = function(value) {
	var newTree = {};
	newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value1) {
	this.children.push(Tree(value1));
};

treeMethods.contains = function(target) {
	let node = this;
	while(node) {
		if (node.value == target) {
			return true;
		} else {
			if (node.children.length) {
				for (var i=0; i<this.children.length; i++) {
					node = this.children[i];
					if (node.contains(target)) {
						return true;
					}
				}
			} else {
				return false;
			}
		}
	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
