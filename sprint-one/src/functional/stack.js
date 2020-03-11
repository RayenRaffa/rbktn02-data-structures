var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let stackSize = someInstance.size();
    storage[stackSize]=value;
  };

  someInstance.pop = function() {
    let element = storage[Object.keys(storage).length-1];
    delete storage[Object.keys(storage).length-1];
    return element;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
