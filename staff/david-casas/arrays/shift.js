delete Array.prototype.shift
function shift(array) {
    

    if(array.length === 0) {
        return undefined
    }
    if (array.length > 0) {
        result = array[array.length - 1]
        array.length = array.length - 1
        return result
    }
       
}



console.log('CASE 1')
var nums = [1, 2, 3];
var result = shift(nums, function(x) {return x - x[0]});
console.log(result);

//[2, 3]

console.log('CASE 2')
var furniture = ["table", 'chair', 'couch', 'chimney']
var result = shift(furniture,function(x) {return x -x[0]})
console.log(result)

// ['chair', 'couch', 'chimney']
