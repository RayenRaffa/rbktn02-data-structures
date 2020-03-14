var BinarySearchTree = function(value) {
	var newBST = {};
	newBST.value = value;

  // your code here
  newBST.left =null;  // fix me
  newBST.right =null;  // fix me

  _.extend(newBST, BSTmethods);
  return newBST;
};
var BSTmethods={};

BSTmethods.insert=function(value){
	//let node=this
	let newNode=BinarySearchTree(value)
	if (value>this.value) {
		if (this.right){
			this.right.insert(value);
		} else { 
			this.right=newNode;
		}
	}
	else if (value<this.value) {
		if (this.left){
			this.left.insert(value);
		} else {
			this.left=newNode;
		}
	}

}

BSTmethods.contains=function(target){
	
	if (this.value===target) {
		return true; 
	}else if (this.value<target) {
		return !!this.right &&(this.right.contains(target));
		// if (this.right) {				
		// 	return this.right.contains(target);
		// } else {
		// 	return false;
		// }
	} else {
		// if (this.left) {
		// 	return this.left.contains(target);
		// } else {
		// 	return false;
		// }
		return !!this.left && (this.left.contains(target));
	}
}

BSTmethods.depthFirstLog=function(callback){
	let node = this;
	while(node) {
		callback(node.value)
		if (node.left) {
			node = this.left; 

			node.depthFirstLog(callback)	
		} 
		if (node.right) {
			node = this.right; 
			node.depthFirstLog(callback);
		}
		if (!node.left && !node.right) {
			break;
		} 
	}
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
