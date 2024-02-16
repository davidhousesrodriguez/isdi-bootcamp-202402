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
var bichos = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(bichos, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log('CASE 2')
console.log(slice(bichos, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log('CASE 3')
console.log(slice(bichos, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('CASE 4')
console.log(slice(bichos, -2));
// Expected output: Array ["duck", "elephant"]

console.log('CASE 5')
console.log(slice(bichos, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log('CASE 6')
console.log(slice(bichos));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


