var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value); 
    if(!this.tail && !this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

  };

  list.removeHead = function() {
    let head = this.head;
    this.head = this.head.next;
    return head.value;
  };

  list.contains = function(target) {
    let node = this.head;
    while(node) {
      if(node.value == target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
