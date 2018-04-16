
//inserts value at beginning of array
Array.prototype.pushFront = function(val){
    var it = [val];
    for (var i=0; i < this.length; i ++) {
        it.push(this[i]);
    }
    return it;
}

//inserts value into array at given index
Array.prototype.insertAt = function(index, val){
  var it = [];
  for (var i = 0; i < index; i ++){
    it.push(this[i]);
  }
  it.push(val);
  for (var i = index; i < this.length; i ++){
    it.push(this[i]);
  }
  return it;
}

Array.prototype.popFront = function(){
  var temp = this[0];
  console.log(this);
  for (var i=0; i < this.length - 1; i++){
    this[i] = this[i+1];
    console.log(this);
  }
  // [1, 2, 3, 4] -> [2, 3, 4, 4]
  this.pop();
  // [2, 3, 4]
  this[this.length] = temp;
  // [2, 3, 4, 1];
  last = this.pop();
  return last;
}

Array.prototype.removeAt(index){
  var temp = this[index];
  for (var i=index; i < this.length - 1; i++){
    this[i] = this[i+1];
  }
  this.pop();
  return this;
}

Array.prototype.swapPairs(){
  var temp;
  for(var i = 0; i < this.length - 1; i+=2){
    temp = this[i];
    this[i] = this[i+1];
    this[i+1] = temp;
  }
  return this;
}



  return this;
}
