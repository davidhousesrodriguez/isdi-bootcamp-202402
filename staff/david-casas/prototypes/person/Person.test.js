var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var person = new Person ('Nino', 'Bravo', 46, 'black', 'blonde', 177, 80 )

console.assert(person.name === 'Nino', 'His name is Nino')
console.assert(person.lastname === 'Bravo', 'lastname Bravo')
console.assert(person.date === 1977, 'he was born in 1977')
console.assert(person.color === 'black', 'Skin color is black')
console.assert(person.hairColor === 'blonde', 'Hair color is blonde')
console.assert(perdon.eyesColor === 'blue', 'He´s got blue eyes')

console.assert(person.height === 177, 'He is 1,77 mts tall')

console.assert(person.weight === 80, 'Hes is 80 kgs weight')
