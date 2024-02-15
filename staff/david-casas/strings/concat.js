//delete String.prototype.concat

function concat(str1, str2, separator) {
  var newStr = str1 + separator + str2;
  return newStr;
}
//CASE 1
var str1 = "David";
var str2 = "Casas";

var char = concat(str1, str2, " ");
console.log(char);
// "David Casas"

//CASE 2
var str1 = "David";
var str2 = "Casas";

var char = concat(str2, str1, " ");
console.log(char);
// "Casas David"

//CASE 3
var str1 = "Perico";
var str2 = "el de los Palotes";

var char = concat(str1, str2, " ");
console.log(char);
//"Perico el de los Palotes"
