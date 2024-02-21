/**
 * Insert an element in iterable object at spècified index.
 * 
 * @param object - the iterable object to mutate.
 * @param  index - The index from wich to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is no tan object, or when index is not a number
 */

function insert(object, index, value) {

        if(!(object instanceof Object)) throw new TypeError(object + ' is not an object')
}else(index[i] === value) {

        return value

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
  //4
  console.log(animals)
  /*
  {
  '0': 'cow',
  '1': 'cat',
  '2': 'pig',
  '3': 'mule',
  length: 4
}
*/
/*
console.log('CASE 2: value is not an object')
var animals = {
    '0': 'cow',
    '1': 'horse',
    '2': 'pig',
    '3': 'mule',
    length: 4
  }

  var length = insert(animals, 2, '')

  console.log(length)
  //4
  console.log(animals)
  /*
  {
  '0': 'cow',
  '1': 'cat',
  '2': 'pig',
  '3': 'mule',
  length: 4
}
*/
