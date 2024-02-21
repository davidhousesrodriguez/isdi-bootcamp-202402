delete Array.prototype.findIndex

function findIndex (array, index, callback) {
    if (arguments.length < 3) {
        callback = index
        for (var i = 0; i < array.length; i++) {
            if (callback(array[i]) === true)
            return i
            }
            return -1
    } else {
        for (var i = index; i < array.length; i++) {
            if(callback(array[i]) === true)
            return i
        }
    }
   
}


console.log ('CASE 1')
var nums = [10, 20, 30, 40, 50, 60, 70]
var result = findIndex(nums, function(x) {return x > 25})

console.assert(nums[0] === nums[0], '10')
console.assert(nums[1] === nums[1], '20')
console.assert(nums[2] === nums[2], '30')
console.assert(nums[3] === nums[3], '40')
console.assert(nums[4] === nums[4], '50')
console.assert(nums[5] === nums[5], '60')
console.assert(nums[6] === nums[6], '70')

console.assert(result === 2, '2')

//nosale
console.log ('CASE 2')
var animals = ['pigs', 'goats', 'sheep', 'cows']
var result = findIndex(animals, function(x) {return x = 'pigs'})

console.assert(animals[0] === animals[0], 'pigs')
console.assert(animals[1] === animals[1], 'goats')
console.assert(animals[2] === animals[2], 'goats')
console.assert(animals[3] === animals[3], 'cows')
