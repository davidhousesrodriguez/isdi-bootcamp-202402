delete Array.prototype.slice

function slice(array, indexStart, indexEnd) {
    var newArray = []

    if (indexStart === undefined || indexStart >= array.length) {
        indexStart = 0
    } else if (indexStart < 0) {
        indexStart += array.length
    }

    if (indexEnd === undefined || indexEnd >= array.length) {
        indexEnd = array.length
    }else if (indexEnd < 0) {
        indexEnd += array.length
    }
    for (var i = indexStart; i < indexEnd && i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    return newArray
    
}


console.log ('CASE 1')
var bichos = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = slice(bichos, 2)

console.assert(bichos[2] === result[0], 'camel')
console.assert(bichos[3] === result[1],'duck')
console.assert(bichos[3] === result[1],'elephant')

console.log('CASE 2')
var result = (slice(bichos, 2, 4))

console.assert(bichos[2] === result[0], 'camel')
console.assert(bichos[3] === result[1],'duck')

console.log('CASE 3')
var result = (slice(bichos, 1, 5))

console.assert(bichos[1] === result[0],'bison')
console.assert(bichos[2] === result[1], 'camel')
console.assert(bichos[3] === result[2],'duck')
console.assert(bichos[4] === result[3],'elephant')

console.log('CASE 4')
var result = (slice(bichos, -2))

console.assert(bichos[3] === result[0], 'duck')
console.assert(bichos[4] === result[1], 'elephant')

console.log('CASE 5')
var result = (slice(bichos, 2, -1))

console.assert(bichos[2] === result[0], 'camel')
console.assert(bichos[3] === result[1], 'duck')

console.log('CASE 6')
var result = (slice(bichos))

console.assert(bichos[0] === result[0], 'ant')
console.assert(bichos[1] === result[1],'bison')
console.assert(bichos[2] === result[2], 'camel')
console.assert(bichos[3] === result[3],'duck')
console.assert(bichos[4] === result[4],'elephant')



