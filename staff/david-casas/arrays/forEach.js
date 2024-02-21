delete Array.prototype.forEach

function forEach(array, callback) {
    var callbackType = typeof callback 

    if(callbackType !== 'function') throw new TypeError
    (callbackType + " " + callback + ' is not a function')
    
    for (var i = 0; i < array.length; i++) {
    var element = array[i]

    callback(element, i, array)
}
}
//CASE 2
console.log("CASE 1")

var nums = [5, 10 , 15 , 20]
forEach(nums, function (num) {
})   
    console.assert(nums[0] === 5, '5')
    console.assert(nums[1] === 10, '10')
    console.assert(nums[2] === 15, '15')
    console.assert(nums[3] === 20, '20')
//CASE 2
console.log ("CASE 2")
var nums = [5, 10, 15, 20, 25]
var sum = 0

forEach(nums, function (num) {
    sum += num
})
console.assert(nums[0] !== 75, '75')
//CASE 3

console.log("CASE 3")
var nums = [5, 10, 15 , 20, 25]

forEach(nums, function (num, index){
    var result1 = num + index
    //console.log(result1)
    console.assert(result1[0] === 5, '5')
    console.assert(result1[1] === 11, '11')
    console.assert(result1[2] === 17, '17')
    console.assert(result1[3] === 23, '23')
    console.assert(result1[4] === 29, '29')
})

    
//5
//11
//17
//23
//29
//CASE 4
console.log('CASE 4')

var nums1 =  [5, 10, 15, 20, 25]

forEach(nums1, function (num, index, array) {
    console.log(num + index + array.length)
})
//10
//16
//22
//28
//34
//CASE 5
console.log("CASE 5")

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums)
}catch (error) {
    console.log(error)
    //TypeError: undefined is not a function
}
//CASE 6
console.log ('CASE 6')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, {})
} catch (error) {
    console.log(error)
    //TypeError: object is not a function
}
//CASE 7
console.log('CASE 7')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, 123)
} catch (error) {
    console.log(error)
    //TypeError: number 123 is not a function
}
//CASE 8
console.log('CASE 8')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, true)
}catch (error) {
    console.log(error)
    //TypeError: boolean true is not a function
}
//CASE 9
console.log('CASE 9')

var nums = [5, 10, 15, 20, 250]

try {
    forEach(nums, !true)
} catch (error) {
    console.log(error)
    //TypeError: boolean false is not a function
}  