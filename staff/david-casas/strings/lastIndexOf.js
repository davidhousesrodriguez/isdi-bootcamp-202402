delete String.prototype.lastIndexOf;

function lastIndexOf(string, searchString) {
  let index;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === searchString[0]) {
      var compareStr = string[i];
      for (var j = 1; j < searchString.length; j++) {
        compareStr = compareStr + string[i + j];
      }
      if (compareStr === searchString) index = i;
    }
  }
  return index;
}

// CASE 1

var s = "hola mundo";

var index = lastIndexOf(s, "o");

console.log(index);
// 9

// CASE 2

var s = "hola mundo";

var index = lastIndexOf(s, "ol");

console.log(index);
// 1
