delete Array.prototype.map

function map (array, mapRes) {
    var newArray = []

    if ( mapRes === undefined) {
        throw error;
    } else {
        
    for (var i = 0; i < array.length; i++) {
        newArray[i] =mapRes(array[i]);
    }

    }
    return newArray

}
console.log ('CASE 1')
var nums = [10, 20, 30, 40]
var map1 = map(nums, function(x) {return x * 2})

console.assert(nums[0] !== map1[0], '20')
console.assert(nums[1] !== map1[1], '40')
console.assert(nums[2] !== map1[2], '60')
console.assert(nums[3] !== map1[3], '80')

console.log ('CASE 2')
var nums = [10, 20, 30, 40]
var map2 = map(nums, function(x) {return x / 2})

console.assert(nums[0] !== map2[0], '5')
console.assert(nums[1] !== map2[1], '10')
console.assert(nums[2] !== map2[2], '15')
console.assert(nums[3] !== map2[3], '20')

console.log('CASE 3')
var nums = [1, 2, 3, 4]
var map3 = map(nums, function(x) {return x / x})

console.assert(nums[0] === map3[0], '1')
console.assert(nums[1] !== map3[1], '1')
console.assert(nums[2] !== map3[2], '1')
console.assert(nums[3] !== map3[3], '1')

console.log('CASE 4')
var nums = [1, 2, 3, "perro"]
var map4 = map(nums, function(x) {return x / x})

console.assert(nums[0] === map4[0], '1')
console.assert(nums[1] !== map4[1], '1')
console.assert(nums[2] !== map4[2], '1')
console.assert(nums[3] !== map4[3], 'NaN')




