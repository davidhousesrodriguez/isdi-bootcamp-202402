delete Array.prototype.every

function every(array, callback) {
    
for (var i = 0; i < array.length; i++) {
    if(callback(array[i]) === false) {
        return false     
    }

}
return true
}



console.log('CASE 1')
var nums = [10, 20, 30, 40, 50]
var result = every(nums, function(x) {return x > 50} )
//console.log(result)
console.assert(result === false, "false")

// false

console.log('CASE 2')
var blank = []
var result = every(blank, function(x) {return x > 50} )
console.assert(result === true, "true")
// true


console.log('CASE 3')
var blank = [5, 10, 15, 20, 25, 30, 35]
var result = every(blank, function(x) {return x < 50} )
console.assert(result === true, "true")
// true




