/**
 * Results the first index that matches a given condition
 * 
 * @param object - the iterable object to mutate.
 * @param  value- The index to be returned- The index to be returned
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number 
 */

function indexOf (object, value) {
    for (var i = 0; i < object.length; i++) {
        var elem = object[i]
        
        if(elem === value)
            return i
    }
    return -1
}

console.log('CASE 1: index of pig')

var animals = {
    '0': 'cow',
    '1': 'horse',
    '2': 'pig',
    '3': 'mule',
    length: 4
    }

var index = indexOf(animals, 'pig')

console.log(index) //as index
//2

console.log('CASE 2: index of squid')

var numbers = {
    '0': '100',
    '1': '200',
    '2': '300',
    '3': '400',
    length: 4
  }

var index = indexOf(numbers, 'squid')

console.log(index) //as index
//-1
/* no funciona el siguente caso.Iterar
console.log('CASE 5: index of true')

var numbers = {
    '0': '100',
    '1': '200',
    '2': '300',
    '3': '400',
    length: 4
  }

  var index = indexOf(numbers, true)

  console.log(index) //as index
  //-1
  */