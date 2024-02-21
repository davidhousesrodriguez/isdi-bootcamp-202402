delete Array.prototype.with

function withh (array, index, value) {
    //TODO implement me
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    newArray[index] = value

return newArray
}


console.log('CASE 1')
var arr = [1, 2, 3, 4, 5]
var result = withh(arr, 2,6)

console.assert(arr[0] === result[0], '1')
console.assert(arr[1] === result[1], '2')
console.assert(arr[2] !== result[2], '6')
console.assert(arr[3] === result[3], '4')
console.assert(arr[4] === result[4], '5')

console.assert(arr[0] === result[0], '1')
console.assert(arr[1] === result[1], '2')
console.assert(arr[2] !== result[2], '3')
console.assert(arr[3] === result[3], '4')
console.assert(arr[4] === result[4], '5')



console.log('CASE 2')
var vehicles = ['car', 'bus', 'tank', 'helicopter', 'bike']
var result = withh(vehicles, 4, 'motorbike')

console.assert(vehicles[0] === result[0], 'car')
console.assert(vehicles[1] === result[1], 'bus')
console.assert(vehicles[2] === result[2], 'tank')
console.assert(vehicles[3] === result[3], 'helicopter')
console.assert(vehicles[4] !== result[4], 'motorbike')

console.assert(vehicles[0] === result[0], 'car')
console.assert(vehicles[1] === result[1], 'bus')
console.assert(vehicles[2] === result[2], 'tank')
console.assert(vehicles[3] === result[3], 'helicopter')
console.assert(vehicles[4] !== result[4], 'bike')



