var assert = require('./assert')

var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var nino = new Person('Nino', 'Bravo', 13, new Date(2010, 2, 30, 14, 0), 'ES', 140, 2, 50)

assert.instanceOf(nino, Person)
assert.equalsValue(nino.constructor, Person)
assert.equalsValue(nino.name, 'Nino')
assert.equalsValue(nino.surname, 'Bravo')
//assert.equalsValue(person.birthdate instanceof Date, true)
assert.instanceOf(nino.birthdate, Date)
assert.equalsValue(nino.birthdate.getFullYear(), 2010)
assert.equalsValue(nino.birthdate.getMonth(), 2)
assert.equalsValue(nino.birthdate.getDate(), 30)
assert.equalsValue(nino.birthdate.getHours(), 14)
assert.equalsValue(nino.birthdate.getMinutes(), 0)
assert.equalsValue(nino.country, 'ES')
assert.equalsValue(nino.height, 140)
assert.equalsValue(nino.weight, 50)
assert.equalsValue(nino.sleeping, false)
assert.equalsValue(nino.eating, '')
assert.equalsValue(nino.legsSpeed, Person.NOT_WALK)
assert.equalsValue(nino.talking, false)

console.log('CASE walk & talk')

var nino = new Person('Nino', 'Bravo', 13, new Date(2010, 2, 30, 14, 0), 'ES', 140, 2, 50)

nino.moveLegs()
nino.talk()

assert.equalsValue(nino.talking, true)
assert.equalsValue(nino.legsSpeed, Person.WALK_NORMAL)