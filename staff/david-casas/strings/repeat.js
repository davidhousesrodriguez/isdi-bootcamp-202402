//delete String.prototype.repeat

function repeat(string, count) {
  var newString = "";
  for (var i = 0; i < count; i++) {
    newString = newString + string;
  }
  return newString;
  // TODO implement me
}

// CASE 1

var s = "happy! ";

var result = repeat(s, 3);

console.log(result);
// 'happy! happy! happy!'
