//delete String.prototype.startsWith;

function startsWith(string, searchString) {
  // TODO implement me
  var newString = "";

  // CASE 1

  for (var i = 0; i < searchString.length; i++) {
    newString = newString + string[i];
  }
  if (newString === searchString) {
    return true;
  } else {
    return false;
  }
}

var s = "hola mundo";

var result = startsWith(s, "hol");

console.log(result);
// true

// CASE 2

var s = "hola mundo";

var result = startsWith(s, "holo");

console.log(result);
// false
