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
var newN = [4, 5]
var result = unshift (nums, newN)

console.assert(nums.length === 5, '5')

console.assert(newN[0] !== result[0],'4')
console.assert(newN[1] !== result[1],'5')
console.assert(nums[0] !== result[2], '1')
console.assert(nums[1] !== result[3], '2')
console.assert(nums[2] !== result[4], '3')
    
console.log('CASE 2')
var nums = [10, 20, 30, 40]
var newN = [50, 60]
var result = unshift (nums, newN)

console.assert(nums.length === 6, '6')

console.assert(newN[0] !== result[0],'50')
console.assert(newN[1] !== result[1],'60')
console.assert(nums[0] !== result[2], '10')
console.assert(nums[1] !== result[3], '20')
console.assert(nums[2] !== result[4], '30')
console.assert(nums[3] !== result[5], '40')
