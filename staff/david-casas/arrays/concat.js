//delete String.prototype.concat;
//var separator = " ";
function concat(arr1, arr2) {
   var concatenatedArray = [];
  
  for (var i = 0; i < arr1.length; i++) {
    concatenatedArray[concatenatedArray.length] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    concatenatedArray[concatenatedArray.length] = arr2[j];
  }
    return concatenatedArray;
}

//CASE 1
console.log('CASE 1')
var arr1 = ["Perico"]
var arr2 = ["De los palotes"];

var arr = concat(arr1, arr2);
console.assert(arr1[0] === arr[0], 'Perico')
console.assert(arr2[0] === arr[1], "De los palotes")
//OUTPUT ["Perico", "De los palotes"]

//CASE 2
console.log('CASE 2')
var num = [1];
var arr1 = ["De picas"];

var arr = concat(num, arr1);

console.assert(num[0] === arr[0], '1')
console.assert(arr1[0] === arr[1], '2')
//OUTPUT [1, "De picas"]

console.log('CASE 3')
var arr1 = ["David"];
var arr2 = ["Casas"];

var arr = concat(arr2, arr1);
//console.log(arr);
console.assert(arr1[0] === arr[1])
console.assert(arr2[0] === arr[0])
//OUTPUT ["Casas", "David"]


//var separator = " ";

//CASE 4
console.log('CASE 4')
var arr1 = [1, 5, 8];
var arr2 = ["j", "h", "l", "r"];

var arr = concat(arr1, arr2);
//console.log(arr);
console.assert(arr1[0] === arr[0], '1')
console.assert(arr1[1] === arr[1], '5')
console.assert(arr1[2] === arr[2], '8')
console.assert(arr2[0] === arr[3], 'j')
console.assert(arr2[1] === arr[4], 'h')
console.assert(arr2[2] === arr[5], 'l')
console.assert(arr2[3] === arr[6], 'r')

// [1,5,8,"j","h","l","r"]