var assert =require('./assert')
var Cat = require('./Cat')
var Person = require('./Person')

console.log('TEST Cat')

console.log('CASE Constructor')
// OWN PROPERTIES name, age,yearOfBirth haircolor, legs, weight
var micifu = new Cat('Micifu', 2, 2020, 'brown',4, 23)

assert.equalsValue(micifu.name, 'Micifu')
assert.equalsValue(micifu.age, 2)
assert.equalsValue(micifu.yearOfBirth, 2020)
assert.equalsValue(micifu.hairColor, 'brown')
assert.equalsValue(micifu.legs, 4)
assert.equalsValue(micifu.weight, 23)
assert.equalsValue(micifu.sleeping, false)
assert.equalsValue(micifu.eating, '')
assert.equalsValue(micifu.legsSpeed, Cat.NOT_WALK)

//CASOS