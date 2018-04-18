
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
    // console.log(this);
  }
  // [1, 2, 3, 4] -> [2, 3, 4, 4]
  // [2, 3, 4]
  this[this.length - 1] = temp;
  this.pop();
  // [2, 3, 4, 1];
  return this;
}

Array.prototype.removeAt = function(index){
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

Array.prototype.removeDuplicates(){
  for(var i=0; i < this.length - 1; i ++){
    if (this[i+1] < this[i]){
      return 'Array must be sorted.'
    }
  }
  for(var i=0; i < this.length - 1; i ++){
    if (this[i+1] == this[i]){
      this.removeAt(i);
    }
  }
  return this;
}

Array.prototype.minToFront = function(){
  var min = this[0];
  for (var i=0; i < this.length - 1; i++){
    if (this[i] > this[i+1]){
      min = this[i+1];
    }
  }
  console.log('min is', min);
  for (var i=this.length; i > 0; i--){
    this[i] = this[i-1];
  }
  this[0] = min;
  console.log(this);
  this.pop();
  console.log(this);
  return this;
}

Array.prototype.reversed = function(){
  var mid = Math.floor(this.length / 2) ? this.length % 2 == 1 : this.length / 2 - 1;
  var start = 0;
  var end = this.length - 1;
  var temp;
  console.log('mid is ', mid);
  while(start < end){
    temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }
  return this;
}

Array.prototype.rotatedRightBy = function(shiftBy){
  var originalLength = this.length;
  for(var i = this.length-1; i >=0; i--){
    this[i+shiftBy] = this[i];
  }
  for(var i = 0; i < this.length; i++){
    if(i >= originalLength){
      this[i - originalLength] = this[i];
    }
  }
  this.length = originalLength;
  return this;

}

Array.prototype.rotatedLeftBy = function(shiftBy){
  var originalLength = this.length;
  this.reversed();
  for(var i = this.length-1; i >=0; i--){
    this[i+shiftBy] = this[i];
  }
  for(var i = 0; i < this.length; i++){
    if(i >= originalLength){
      this[i - originalLength] = this[i];
    }
  }
  this.length = originalLength;
  this.reversed()
  return this;
}

Array.prototype.onlyBetween = function(min, max){
  for(var i = 0; i < this.length; i++){
    if(i == 0 && this[i] < min || this[i] > max){
      this.popFront();
    }
    if(i == this.length - 1 && this[i] < min || this[i] > max){
      this.pop();
    }
    if(0 < i < this.length - 1 && this[i] < min || this[i] > max){
      this.removeAt(i);
    }
  }
  return this;
}
