// var UPPERCASE_ALPHABET = /A-Z/, LOWERCASE_ALPHABET = /a-z/, FULL_ALPHABET = /a-zA-Z/;

String.prototype.removeAt = function(index){
  var arr = this.split('');
  var temp = arr[index];
  for (var i=index; i < arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  return arr.join('');
}

String.prototype.isLett

String.prototype.indexOf = function(val){
  for (var i = 0; i < this.length; i++){
    if (this[i] == val){
      return i;
    }
  }
  return -1;
}

String.prototype.removeBlanks = function(){
  var newString = '', BLANK_SPACE = ' ';
  for (var i = 0; i < this.length; i++){
    if (this[i] != BLANK_SPACE){
      newString += this[i];
    }
  }
  return newString;
}

String.prototype.contains = function(char){
  return Boolean((this.indexOf(char)+1))
}

String.prototype.getDigits = function(){
  var numberString = ''
  var NUMBERS = '1234567890';
  for (var i = 0; i < this.length; i++){
    if (NUMBERS.contains(this[i])){
      numberString += this[i];
    }
  }
  return numberString;
}

String.prototype.acronyms = function(){
  var arr = this.split(' '), acronymString = '';
  for (var i = 0; i < arr.length; i++){
    acronymString += arr[i][0];
  }
  return acronymString.toUpperCase();
}

String.prototype.countNonSpaces = function(){
  var nonSpaceCount = 0;
  for (var i = 0; i < this.length; i++){
    if (this[i] != ' '){
      nonSpaceCount++;
    }
  }
  return nonSpaceCount;
}

String.prototype.reversed = function(){
  var reversedString = '';
  for (var i = this.length - 1; i >= 0; i--){
    reversedString += this[i];
  }
  return reversedString;
}

String.prototype.parensValid = function(){
  var leftParenCount = 0,
      rightParenCount = 0,
      leftIndex = 0,
      rightIndex = this.length - 1;
  while (leftIndex <= rightIndex){
    if (this[leftIndex] == '('){
      leftParenCount++;
    }
    if (this[rightIndex] == ')'){
      rightParenCount++;
    }
    leftIndex++;
    rightIndex--;
  }
  if (leftParenCount == rightParenCount){
    return true;
  }
  return false;
}

String.prototype.bracesValid = function(){
  var leftBraceCount = 0,
      rightBraceCount = 0,
      leftIndex = 0,
      rightIndex = this.length - 1,
      leftBraces = '[{(',
      rightBraces = ')}]',
      leftBracesArray = [],
      rightBracesArray = [];
  while (leftIndex <= rightIndex) {
    if (leftBraces.contains(this[leftIndex])){
      leftBraceCount++;
      leftBracesArray.push(this[leftIndex]);
    }
    if (rightBraces.contains(this[rightIndex])){
      rightBracesArray.push(this[rightIndex]);
    }
    if (leftBracesArray != rightBracesArray.reversed()){
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  if (leftBraceCount == rightBraceCount){
    return true;
  }
  return false;
}
