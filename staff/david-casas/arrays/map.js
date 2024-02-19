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
var map1 = map(nums, function(x) {return x *2})
console.log (map1)
//[20, 40, 60, 80]

console.log ('CASE 2')
var nums = [10, 20, 30, 40]
var map2 = map(nums, function(x) {return x / 2})
console.log(map2)
//[5, 10, 15, 20]

console.log('CASE 3')
var nums = [1, 2, 3, 4]
var map3 = map(nums, function(x) {return x / x})
console.log(map3)
//[1, 1, 1, 1]

console.log('CASE 4')
var nums = [1, 2, 3, "perro"]
var map4 = map(nums, function(x) {return x / x})
console.log(map4)
//[1, 1, 1, NaN]




