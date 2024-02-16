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




console.log("CASE 1")

var nums = [5, 10 , 15 , 20]
forEach(nums, function (num) {
    console.log(num)

})
//5
//10
//15
//20

console.log ("CASE 2")
var nums = [5, 10, 15, 20, 25]
var sum = 0

forEach(nums, function (num) {
    sum += num
    
})
console.log(sum)
//75

console.log("CASE 3")

var nums = [5 , 10, 15 , 20, 25]

forEach(nums, function (num, index){
    console.log(num + index)
})
//5
//11
//17
//23
//29

console.log('CASE 4')

var nums =  [5, 10, 15, 20, 25]

forEach(nums, function (num, index, array) {
    console.log(num + index + array.length)
})
//10
//16
//22
//28
//34

console.log("CASE 5")

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums)
}catch (error) {
    console.log(error)
    //TypeError: undefined is not a function
}

console.log ('CASE 6')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, {})
} catch (error) {
    console.log(error)
    //TypeError: object is not a function
}

console.log('CASE 7')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, 123)
} catch (error) {
    console.log(error)
    //TypeError: number 123 is not a function
}
console.log('CASE 8')

var nums = [5, 10, 15, 20, 25]

try {
    forEach(nums, true)
}catch (error) {
    console.log(error)
    //TypeError: boolean true is not a function
}

console.log('CASE 9')

var nums = [5, 10, 15, 20, 250]

try {
    forEach(nums, !true)
} catch (error) {
    console.log(error)
    //TypeError: boolean false is not a function
}  