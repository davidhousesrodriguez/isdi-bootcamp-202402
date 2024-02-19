delete Array.prototype.unshift

function unshift(array, newElements) {
    var newArray = []
    for (var i = 0; i < newElements.length; i++) {
        newArray[i] = newElements[i]
    }

    for (var j = 0; j < array.length; j++) {
    newArray[newElements.length + j] = array[j]
    }

    for (var k = 0; k < newArray.length; k++) {
        array[k] = newArray[k]
    }
    return array.length
}


console.log('CASE 1')
var nums = [1, 2, 3]
var newElements = [4, 5]
var result = unshift (nums, newElements)
console.log(result)
//5
console.log(nums)
// Expected output: Array [4, 5, 1, 2, 3]


console.log('CASE 2')
var nums = [10, 20, 30, 40]
var newElements = [50, 60]
var result = unshift (nums, newElements)
console.log(result)
//5
console.log(nums)
// Expected output: Array [4, 5, 1, 2, 3]