delete Array.prototype.some

function some(array, callback) {

    for (var i = 0; i < array.length; i++) {
       if (callback(array[i]) === true) {
        return true
    }
}
return false
}

console.log('CASE 1')
var nums = [10, 20, 30, 40, 50]
var result = some(nums, function(x) {return x > 50} )
console.assert (result === false, 'false')

console.log('CASE 2')
var blank = []
var result = some(blank, function(x) {return x > 50} )
console.assert (result === false, 'false')

console.log('CASE 3')
var blank = [5, 10, 15, 20, 25, 30, 35]
var result = some(blank, function(x) {return x < 10 })
console.assert (result === true, 'true')

