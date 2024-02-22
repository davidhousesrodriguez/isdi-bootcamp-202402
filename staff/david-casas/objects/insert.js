/**
 * Insert an element in iterable object at specified index.
 * 
 * @param object - the iterable object to mutate.
 * @param  index - The index from wich to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is no tan object, or when index is not a number
 */

function insert(object, index, value) {

        if(!(object instanceof Object)) throw new TypeError(object + ' is not an object')
        if (typeof index !== 'number') throw new TypeError
        (index + 'is not a Number')

        for (var i = object.length; i > index; i--)
        object[i] = object[i - 1]

        object[index] = value

        object.length++

        return object.length
}



console.log('CASE 1: insert cat in index 1')
var animals = {
    '0': 'cow',
    '1': 'horse',
    '2': 'pig',
    '3': 'mule',
    length: 4
  }

  var length = insert(animals, 1, 'cat')

  console.log(length)
  //5
  console.log(animals)
  /*
  {
  '0': 'cow',
  '1': 'cat',
  '2': 'horse',
  '3': 'pig',
  '4': 'mule'
  length: 5
}
*/
console.log('CASE 2: insert 400 in index 3')
var nums = {
    '0': 100,
    '1': 200,
    '2': 300,
    '3': 500,
    '4': 600,
    '5': 700,
    length: 6
  }

  var length = insert(nums, 3, 400)

  console.log(length)
  //8
  console.log(nums)
  /*
  {
    '0': 100,
    '1': 200,
    '2': 300,
    '3': 400,
    '4': 500,
    '5': 600,
    '6': 700
    length: 7
  }

*/
console.log('CASE 3: when 1 is not an object parameter')

try {
  insert(1)
} catch (error) {
  console.log(error)
  // TypeError : 1 is not an object
}

