var assert = require('./assert')

var Animal = require('./Animal')
var Pet = require('./Pet')
var Person = require('./Person')

console.log('TEST Pet')

console.log('CASE constructor')

var nino = new Person('Nino', 'Bravo', new Date(2023, 2, 28, 14, 15), 'ES', 170, 90)
var golfo = new Pet(nino,'Golfo', 23, 4 , 50)

assert.instanceOf(golfo, Pet)
assert.instanceOf(golfo, Animal)
assert.equalsValue(golfo.constructor, Pet)
assert.equalsValue(golfo.name, 'Golfo')
assert.equalsValue(golfo.age, 23)
assert.equalsValue(golfo.legs, 4)
assert.equalsValue(golfo.weight, 50)
assert.equalsValue(golfo.sleeping, false)
assert.equalsValue(golfo.eating, '')
assert.equalsValue(golfo.legsSpeed, 0)

console.log('CASE toString')

var nino = new Person('Nino', 'Bravo', new Date(2023, 2, 28, 14, 15), 'ES', 170, 90)
var golfo = new Pet(nino,'Golfo', 23, 4 , 50)

assert.equalsValue(golfo.toString(), 'Pet (Golfo, 23, 4, 50)') 

console.log('CASE constructor fails on non-Person owner')

var errorThrown

try {
    new Pet(undefined, 'Golfo', 23, 4, 50)
}catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'owner is not a Person')