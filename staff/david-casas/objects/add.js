/**
 * Adds an elemnt in an iterable object
 * @param object - The iterable object to mutate.
 * @param value - The value to add.
 * 
 * @throws {TypeError} When object is not an object.
 */

function add(object, value) {
    if( arguments.length === 1) {
        return object.length
    }
    else if(!( object instanceof Object)) {
        throw new TypeError(object + ' is not an Object')
    }
    else {
        
    object[object.length] = value

    object.length++

    return object.length
    }
}

//CASE 1
console.log('CASE 1: add violet in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors, 'violet')
console.log(length)
// 4
console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/
// CASE 2
console.log('CASE 2 : add cat in animals')
var animals = {
    0: 'cow', 
    1: 'horse',
    2: 'pig',
    3: 'mule',
    length: 4 
}
var length = add(animals, 'cat')
console.log(length)
// 4
console.log(animals)
/*
{
    0: 'cow,
    1: 'horse
    2: 'pig'
    3: 'cat'
    lenght: 4
}
*/

//CASE 3
console.log('CASE 3: fails on undefined as object parameter')

var string = 'loco'
try {
    result = add(string, 1)
}catch(error) {
    console.log( error)
}
//TypeError: pepe is not an object
