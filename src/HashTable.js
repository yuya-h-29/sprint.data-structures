const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    return this.storage.get(idx);
  }

  remove(key) {
    const index = simpleHash(key, this.limit);
    if (this.storage.get(index) == null) {
      return false;
    } else {
      this.storage.remove(index);
      return true;
    }
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
