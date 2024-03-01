var Animal = require('./Animal')
var Pet = require('./Pet')
function Cat(name, age, yearOfBirth, hairColor, legs, weight) {
  
    this.yearOfBirth = yearOfBirth
    this.hairColor = hairColor
}

//Pet.call a Animal.call... como hacerlo??

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype = Object.create(Pet.prototype)
Cat.prototype.constructor = Cat

Pet.NOT_WALK = 0
Pet.WALK_VERY_SLOW = 1
Pet.WALK_SLOW = 2
Pet.WALK_NORMAL = 4
Pet.WALK_FAST = 5
Pet.RUN = 6


module.exports = Cat