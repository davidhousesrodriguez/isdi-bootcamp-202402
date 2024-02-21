delete Array.prototype.at;

function at(array, index) {
  
  var element = ''
  
  if (index > -1) {
    element = array[index];
    return element;
  } else {
    var newIndex = array.length + index;

    element = array[newIndex];

    return element;
  }
}

// CASE 1
console.log('CASE 1')

var nums = [100, 200, 300, 400, 500];

var num = at(nums, 3);

console.assert(num === 400, '400')
// 400

// CASE 2
console.log('CASE 2')

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, 4);

console.assert(char === ' ', ' ')
// ' '

// CASE 3

console.log('CASE 3')

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, -3);

console.assert( char === 'n', 'n')
// 'n'

// CASE 4
console.log('CASE 4')

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, -30);

console.assert(char === undefined, 'undefined')
// undefined
