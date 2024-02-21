delete Array.from;

function from(element, formula) {
  let newArray = []
  if (formula === undefined) {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = element[i]
    }
    return newArray
  }else{
  
for (var i = 0; i < element.length; i++) {
  newArray[i] = formula(element[i])

}
return newArray
}
}

console.log('CASE 1')
var str = 'papaya'
var result = from(str)
//console.log(result)
console.assert(str[0] === result[0], 'p')
console.assert(str[1] === result[1], 'a')
console.assert(str[2] === result[2], 'p')
console.assert(str[3] === result[3], 'a')
console.assert(str[4] === result[4], 'y')
console.assert(str[5] === result[5], 'a')


//['p', 'a', 'p', 'a', 'y', 'a']

console.log('CASE 2')
var arr = [1, 2, 3]
var result = from(arr, (x) => x + 1)

console.assert(result[0] === 2,'2')
console.assert(result[1] === 3,'3')
console.assert(result[2] === 4,'4')

console.log('CASE 3')

var result = from(arr, (x) => x + x)

console.assert(result[0] === 2,'2')
console.assert(result[1] === 4,'4')
console.assert(result[2] === 6,'6')


