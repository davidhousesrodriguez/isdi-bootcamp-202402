// delete Array.prototype.find
delete Array.prototype.find;

function find(array, condition) {
    
    var result = '';

    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result = array[i];
           
        }
    }
    return result;
}

console.log('CASE 1');
var nums1 = [1, 12, 23, 59];

var find1 = find(nums1,function(x) {return x > 23});
//console.log(find1);

// 23
console.assert(find1 === 59, '59')

console.assert(nums1[0] === 1, '1')
console.assert(nums1[1] === 12, '12')
console.assert(nums1[2] === 23, '23')
console.assert(nums1[3] === 59, '59')


//2
console.log('CASE 2');
var nums2 = [1, 12, 23, 59];

var find2 = find(nums2, (x) => x <= 23);


console.assert(find2 === 23, '23')

console.assert(nums2[0] === 1, '1')
console.assert(nums2[1] === 12, '23')
console.assert(nums2[2] === 23, '59')
console.assert(nums2[3] === 59, '59')

// 23