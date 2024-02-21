delete Array.prototype.splice

function splice(array, start, deleteCount, item) {
    if (deleteCount === 0) {
        for (var i = array.length - 1; i > start - 1; i--) {
            var elem = array[i]

            array[i + 1] = elem
        }

        array[start] = item

        return []
    } else if (deleteCount === 1) {
        var removed = []

        removed[removed.length] = array[start]

        array[start] = item

        return removed
    } else if (deleteCount >= 2) {
        var removed = []

        for (var i = 0; i < deleteCount; i++)
            removed[removed.length] = array[start + i]

        for (var i = 0; i < array.length - (start + deleteCount - 1); i++) {
            var elem = array[start + deleteCount + i]
            array[start + 1 + i] = elem
        }

        array.length -= deleteCount - 1

        array[start] = item

        return removed
    }
}
console.log('CASE 1')
var  months = ['Jan', 'March', 'April', 'June'];
var extracted = splice(months, 1, 0, 'Feb') 
// Inserts at index 1
//console.log(extracted)
console.assert(months[1] === '[]', '[]')
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// console.log(months)
console.assert(months[0] === months[0], 'Jan')
console.assert(months[1] === months[2], 'March')
console.assert(months[2] === months[3], 'April')
console.assert(months[3] === months[4], 'June')

console.log('CASE 2')
var extracted = splice(months, 4, 1, 'May');
// Replaces 1 element at index 4
console.log(extracted)
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
console.log(months)