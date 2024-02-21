delete Array.prototype.includes
function includes(array, searchElement, fromIndex) {
  if (fromIndex === undefined) {
    for (var i = 0; i < array.length; i++) {
      if (searchElement === array[i]) return true;
    }
  } else if (fromIndex !== undefined) {
    for (var j = fromIndex; j < array.length; j++) {
      if (searchElement === array[j]) return true
    }
  }

  return false
}
console.log('CASE 1')
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
var element = "Apple"
var s = includes(fruits, element)
console.assert(s === true, 'true')

console.log('CASE 2')
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
var element = "Pineapple"
var s = includes(fruits, element)
console.assert(s === true, 'true')

console.log('CASE 3')
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
var element = "Mandarina"
var s = includes(fruits, element)
console.assert(s === false, 'false')
