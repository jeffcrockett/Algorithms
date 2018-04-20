
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
  for(var i = this.length; i > index; i--){
    this[i] = this[i-1];
  }
  this[index] = val;
  return this;
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

Array.prototype.min = function(){
  var min = this[0];
  for(var i=1; i < this.length; i++){
    if(this[i] < min){
      min = this[i]
    }
  }
  return min;
}

Array.prototype.max = function(){
  var max = this[0];
  for(var i=1; i < this.length; i++){
    if(this[i] > max){
      max = this[i]
    }
  }
  return max;
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

function concat(arr1, arr2){
  var newArray = [];
  for(var i=0; i<arr1.length; i++){
    newArray.push(arr1[i]);
  }
  for(var i=0; i<arr2.length; i++){
    newArray.push(arr2[i]);
  }
  return newArray;
}

Array.prototype.indexOf = function(value){
  for(var i=0; i<this.length; i++){
    if(this[i] == value){
      return i;
    }
  }
  return -1;
}
function skylineHeights(arr){
  var max = arr.max();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0 || i > 0 && arr.indexOf(max) < i && max >= arr[i]){
      arr.removeAt(i);
    }

  }
  return arr;
}

Array.prototype.removeNegatives = function(){
  for(var i=0; i<this.length; i++){
    console.log(this.length);
    if(this[i] < 0){
      this.removeAt(i);
      console.log(this);
      i--;
    }
  }
  return this;
}

Array.prototype.secondToLast = function(){
  if(this.length < 2){
    return null;
  }
  for(var i = 0; i < this.length; i++){
    if(i == this.length -2){
      return this[i];
    }
  }
}

Array.prototype.nthToLast = function(n){
  if(this.length < n){
    return null;
  }
  for(var i = 0; i < this.length; i++){
    if(i == this.length - n){
      return this[i];
    }
  }
}

Array.prototype.secondLargest = function(){
  if(this.length < 2){
    return null;
  }
  var max = this.max();
  this.removeAt(this.indexOf(max));
  return this.max();
}

Array.prototype.isValidCreditCard = function(){
  var count = 0, sum = 0;
  if(this.length < 13 || this.length > 19){
    return 'Error: Card must be between 13 and 19 digits';
  }
  var copy = [];
  for(var i = 0; i < this.length; i++){
    copy.push(this[i]);
  }
  for(var i = copy.length - 1; i <= 0; i--){
    if(count % 2 == 0){
      copy[i] = copy[i] * 2;
    }
    if(copy[i] > 9){
      copy[i] = copy[i] - 9;
    }
    count++;
  }
  for(var i = 0; i < copy.length; i++){
    sum += copy[i];
  }

  sum += this[this.length - 1];
  if(sum % 10 == 0){
    return true;
  }
  else {
    return false;
  }
}

Array.prototype.contains = function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i] == value){
      return true;
    }
  }
  return false;
}

Array.prototype.shuffled = function(){
  var swappedIndices = [], randomIndex, temp;
  for(var i = 0; i<this.length; i++) {
    randomIndex = Math.floor(Math.random() * this.length);
    if (swappedIndices.contains(randomIndex)){
      i--;
      continue;
    }
    else {
      swappedIndices.push(randomIndex);
      temp = this[i];
      this[i] = this[randomIndex];
      this[randomIndex] = temp;
    }

  }
  return this;
}

Array.prototype.removeRange = function(start, end){
  while (end >= start){
    this.removeAt(end);
    end--;
  }
  return this;
}

Array.prototype.intermediateSums = function(){

  var sumOf = 0, count = 0, length = this.length,
    multiplier = 0;
  while(length > 0){
    while(count <= 10 * multiplier && this.length >= 10){
      sumOf += this[count];
      count++;

      }

    sumOf = 0;
    count += 10;
    length--;
    multiplier++;
    this.insertAt(count, sumOf)
  }
  return this;
}

// combine values of two arrays sequentially into a new array
var zipIt = function(arr1, arr2){
  var newArray = [];
  if (arr1.length <= arr2.length){
    for (var i = 0; i < arr1.length; i++){
      newArray.push(arr1[i]);
      newArray.push(arr2[i]);

    }
    for (var i = arr1.length; i < arr2.length; i++){
      newArray.push(arr2[i]);
    }
  }
  else {
    for (var i = 0; i < arr2.length; i++){
      newArray.push(arr1[i]);
      newArray.push(arr2[i]);
    }
    for (var i = arr2.length; i < arr1.length; i++){
      newArray.push(arr1[i]);
    }

  }
  return newArray;
}

// combine the two arrays' values into the first array

var zipIt2 = function(arr1, arr2){
  var i = 1, j = 0, arr1Length = arr1.length;
    while (j < arr2.length){
      arr1.insertAt(i, arr2[j]);
      console.log('arr 1 is ', arr1);
      j++;
      j < arr1Length ? i += 2 : i++;
      console.log('i is ', i, 'j is ', j, 'arr1Length is ', arr1Length);
    }
  return arr1;
  }

Array.prototype.removeShorterStrings = function(stringLength){
  for (var i = 0; i < this.length; i++){
    if (this[i].length <= stringLength){
      this.removeAt(i);
    }
  }
  return this;

}

Array.prototype.removeEvenLengthStrings = function(){
  for(var i = 0; i < this.length; i++){
    if (this[i].length % 2 == 0){
      this.removeAt(i);
      i--;
    }
  }
  return this;
}
