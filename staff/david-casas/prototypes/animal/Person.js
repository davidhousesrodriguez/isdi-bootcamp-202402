var Animal = require('./Animal')

function Person(name, surname, age, birthdate, country, height, legs,  weight) {
    Animal.call(this, name, age, legs, weight)

    this.surname = surname
    this.height = height
    this.talking = false
    this.birthdate = birthdate
    this.country = country
}

Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person

Person.NOT_WALK = 0
Person.WALK_VERY_SLOW = 1
Person.WALK_SLOW = 2
Person.WALK_NORMAL = 4
Person.WALK_FAST = 5
Person.RUN = 6

Person.prototype.talk = function () {
    this.talking = true
}

module.exports = Person