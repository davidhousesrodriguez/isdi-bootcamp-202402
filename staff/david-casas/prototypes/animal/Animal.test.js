var assert = require('./assert')

var Animal = require('./Animal')

console.log('TEST Animal')

console.log('CASE constructor')

var golfo = new Animal('Golfo', 23, 4 , 50)
assert.instanceOf(golfo, Animal)
assert.equalsValue(golfo.constructor, Animal)
assert.equalsValue(golfo.name, 'Golfo')
assert.equalsValue(golfo.age, 23)
assert.equalsValue(golfo.legs, 4)
assert.equalsValue(golfo.weight, 50)
assert.equalsValue(golfo.sleeping, false)
assert.equalsValue(golfo.eating, '')
assert.equalsValue(golfo.legsSpeed, 0)

console.log('CASE sleep')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.sleep()

assert.equalsValue(golfo.sleeping, true)

console.log('CASE awake')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.sleeping = true

golfo.awake()

assert.equalsValue(golfo.sleeping, false)

console.log('CASE eat')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.eat('🍌')

assert.equalsValue(golfo.eating, '🍌')

console.log('CASE eat on sleeping (unhappy)')
errorThrown
var golfo = new Animal('Golfo', 23, 4, 50)

golfo.sleeping = true

var errorThrown

try {
    golfo.eat('🍌')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE walk')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs()

assert.equalsValue(golfo.legsSpeed, Animal.WALK_NORMAL)

console.log('CASE walk fast')

var sultan = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs(Animal.WALK_FAST)

assert.equalsValue(golfo.legsSpeed, Animal.WALK_FAST)

console.log('CASE walk slow')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs(Animal.WALK_SLOW)

assert.equalsValue(golfo.legsSpeed, Animal.WALK_SLOW)

console.log('CASE walk normal')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs(Animal.WALK_NORMAL)

assert.equalsValue(golfo.legsSpeed, Animal.WALK_NORMAL)

console.log('CASE walk very slow')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs(Animal.WALK_VERY_SLOW)

assert.equalsValue(golfo.legsSpeed, Animal.WALK_VERY_SLOW)

console.log('CASE run')

var golfo = new Animal('Golfo', 23, 4, 50)

golfo.moveLegs(Animal.RUN)

assert.equalsValue(golfo.legsSpeed, Animal.RUN)
//
console.log('CASE toString')

var golfo = new Animal ('Golfo', 23, 4, 50)



assert.equalsValue(golfo.toString(), 'Animal (Golfo)')


console.log('CASE constructor fails on non-Number age')

var errorThrown 
try{
    new Animal('Golfo', undefined, 4, 50) 
} catch(error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'age is not a number')

console.log ('CASE constructor fails on non-Number legs')

var errorThrown

try {
    new Animal('Golfo', 23, undefined, 50) 
} catch (error) {
    errorThrown = error
}
assert.error (errorThrown, 'TypeError', 'legs is not a number')

console.log('CASE constructor fails on non-Number weight')

var errorThrown

try {
    new Animal('Golfo', 23, 4, undefined) 
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'weight is not a number')