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
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
var result = filter(words, function(x) {return x.length > 6});
//var result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]
var result = filter(nums, function(x) {return x > 25})
console.log(result);
//[30, 40, 50]

console.log ('CASE 3')
var nums1 = [1, 2, 3]
var result = filter(nums1, function(x) {return x > 25})
console.log(result)
//[]



