function Animal(name, age, legs, weight) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (typeof age !== 'number') throw new TypeError('age is not a number')
    if (typeof legs !== 'number') throw new TypeError('legs is not a number')
    if (typeof weight !== 'number') throw new TypeError('weight is not a number')

    this.name = name
    this.age = age
    this.legs = legs
    this.weight = weight
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = 0
    this.energy = 100 
}

Animal.NOT_WALK = 0
Animal.WALK_VERY_SLOW = 1
Animal.WALK_SLOW = 2
Animal.WALK_NORMAL = 4
Animal.WALK_FAST = 5
Animal.RUN = 6


Animal.prototype.sleep = function () {
    this.sleeping = true
}

Animal.prototype.awake = function () {
    this.sleeping = false
}

Animal.prototype.eat = function (food) {
    if (this.sleeping) throw new Error('try to eat on sleeping')

    this.eating = food
}

Animal.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Animal.prototype.toString = function () {
    return Animal.name + ' (' + this.name + ')'
}


module.exports = Animal