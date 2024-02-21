delete Array.prototype.filter

// creates a new array with function verified elements
function filter(array, callback) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray 
    
    }
 
console.log ('CASE 1')
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
var result = filter(words, function(x) {return x.length > 6})

console.assert(words[2] === result [0], 'exuberant')
console.assert(words[3] === result [1], 'destruction')
console.assert(words[4] === result [2], 'present')


console.log('CASE 2')
var nums = [10, 20, 30, 40, 50]
var result = filter(nums, function(x) {return x > 25})

console.assert(nums[2] === result [0], '30')
console.assert(nums[3] === result [1], '40')
console.assert(nums[4] === result [2], '50')


console.log ('CASE 3')
var nums1 = [1, 2, 3]
var result = filter(nums1, function(x) {return x > 25})
//console.log(result)
console.assert(nums1[0] !== result[0], '1')
console.assert(nums1[1] !== result[1], '2')
console.assert(nums1[2] !== result[2], '3')


//[]



