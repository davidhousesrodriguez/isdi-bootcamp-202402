function indexOf(array, searchElement) {
  var index = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return index;
    }
  }
  return -1;
}
//CASE 1
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Apple";
var s = indexOf(fruits, element);
//2

//CASE 2
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Pineapple";
var s = indexOf(fruits, element);
//4
//CASE 2
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Mandarina";
var s = indexOf(fruits, element);
//-1
