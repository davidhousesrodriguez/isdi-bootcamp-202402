//delete Array.prototype.pop

function pop(array) {
  var popValue = " "
  if (array.length >= 0) {
    popValue = array[array.length - 1]
    array.length--
    return popValue
  } else {
    return undefined
  }
}

// CASE 1
console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var num = pop(nums)


console.assert(num === 500, '500')

console.assert(nums.length === 4, '4')
console.assert(nums[0] === nums [0], '100')
console.assert(nums[1] === nums [1], '200')
console.assert(nums[2] === nums [2], '300')
console.assert(nums[3] === nums [3], '400')

console.log('CASE 2')

var animals = ["pigs", "goats", "sheep", "cows"]
var animal = pop(animals)


console.assert(animal === 'cows', 'cows')

console.assert(animals.length === 3, '3')

console.assert(nums[0] === nums [0], 'pigs')
console.assert(nums[1] === nums [1], 'goats')
console.assert(nums[2] === nums [2], 'sheep')

console.log('CASE 3')

var sports = ["soccer", "baseball"]

var sport = pop(sports)

console.assert(sport === 'baseball', 'baseball')
console.assert(sports.length === 1,'1')
console.assert(sports[0] === sports[0])

console.log('CASE 4')

var sport = []

var sport = pop(sports)

console.assert(sport === 'soccer', 'soccer')

console.assert(sports.length == 0, '0')

console.assert(sports[0] === sports [0], '0')



