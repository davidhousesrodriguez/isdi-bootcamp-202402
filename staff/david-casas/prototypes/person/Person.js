function Person (name, lastName,yearOfBirth, SkinColor, hairColor, height, weight) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.SkinColor = SkinColor
    this.hairColor = hairColor
    this.eyesColor = eyesColor
    this.height = height
    this.weight = weight
}

Person.prototype.name = function() {
this.name = 'Nino'
}

Person.prototype.lastName = function() {
    this.lastName = 'Bravo'
}

Person.prototype.age = function() {
    this.age  = 1977
}

Person.prototype.color = function() {
    this.hairColor = hairColor
}
Person.prototype.hairColor = function() {
    this.hairColor = this.hairColor
}
Person.prototype.height = function() {
    this.height = height
}
Person.prototype.weigth = function() {
    this.weigth = this.weight
}


module.exports = Person