//delete String.prototype.split;

function split(string, separator) {
  var resultArray = [];
  var count = 0;
  var newString = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== separator) {
      newString = newString + string[i];
    } else {
      resultArray[count] = newString;
      count++;
      newString = "";
    }
  }
  resultArray[count] = newString;
  return resultArray;
}
// CASE 1

var s = "hola mundo";

var words = split(s, " ");

console.log(words);
// ['hola', 'mundo']
