var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let firstIndex = Object.keys(storage)[0]; 
    let queueSize = someInstance.size();

    storage[firstIndex + queueSize] = value;
    
  };

  someInstance.dequeue = function() {
    let element = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return element;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
