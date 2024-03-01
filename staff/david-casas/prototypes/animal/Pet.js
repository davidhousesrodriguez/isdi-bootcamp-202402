var Animal = require('./Animal')
var Person = require('./Person')

function Pet(name, age, legs, weight) {
    if (!(owner instanceof Person)) throw new TypeError ('owner is not a Person')
    this.owner = this.owner

    Animal.call(this, name, age, legs, weight)
}

// Pet.prototype = new Animal
Pet.prototype = Object.create(Animal.prototype)
Pet.prototype.constructor = Pet

   
Pet.NOT_WALK = 0
Pet.WALK_VERY_SLOW = 1
Pet.WALK_SLOW = 2
Pet.WALK_NORMAL = 4
Pet.WALK_FAST = 5
Pet.RUN = 6



Pet.prototype = new Animal

module.exports = Pet