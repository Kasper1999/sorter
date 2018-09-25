class Sorter {
  constructor() {
    this.arr=[];
  }


  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.add[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
   return this.arr;
  }

  sort(indices) {
    var z=[];
    for( var i=0;i<indices.length;i++){
      z[i]=this.arr[indices[i]];
    }
    z.sort();
    for( var i=0;i<indices.length;i++){
      this.arr.splice(indices[i], 1, z[i]);
    }

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;