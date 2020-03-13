

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  tuple = [k,v];
  bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [tuple];
  } else {
    overWritten = false;
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] == k) {
        bucket[i][1] = v;
        overWritten = true;
        break;
      }
    }
    if(!overWritten){
      bucket.push(tuple);
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  bucket = this._storage.get(index);
  if(bucket){  
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] == k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


