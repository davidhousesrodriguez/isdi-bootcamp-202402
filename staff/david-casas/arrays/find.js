// delete Array.prototype.find
delete Array.prototype.find;

debugger;

function find(array, condition) {
    debugger;
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

var find1 = find(nums1, (x) => x > 15);
console.log(find1);
// 59

console.log('CASE 2');
var nums2 = [1, 12, 23, 59];

var find2 = find(nums2, (x) => x <= 23);
console.log(find2);
// 23