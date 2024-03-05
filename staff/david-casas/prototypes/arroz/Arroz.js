function Arroz() {
    if (arguments.length !== 1) {
        this.length = arguments.length

        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }
    } else {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            this.length = argument

            return
        }

        this[0] = argument
        this.length = 1
    }
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++
    }
    return this.length
}

Arroz.prototype.pop = function () {
    var lastIndex = this.length - 1
    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if (i < this.length - 1) {
            string += ', '
        }
    }

    string += ']'

    return string
}

Arroz.prototype.at = function (index) {
    return this[index > -1 ? index : index + this.length]
}

Arroz.prototype.concat = function (added) {
    if (added instanceof Array) {
        for (var i = 0; i < added.length; i++) {
            this[this.length] = added[i]
            this.length++
        }
    }
    this[this.length] = added
    this.length++

    return this
}

Arroz.prototype.every = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (element !== undefined) {
            if (callback(element) === false)
                return false
        }
    }
    return true
}

Arroz.prototype.includes = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (element !== undefined) {
            if (callback(element) === true)
                return true
        }
    }
    return false
}

Arroz.prototype.indexOf = function (value, index) {
    if (arguments.length === 1) {
        for (var i = 0; i < this.length; i++) {
            element = this[i]
            if (element === value) {
                return i
            }
        }
    } else if (arguments.length === 2) {
        index = index > -1 ? index : index + this.length - 1
        if (index < 0 || index > this.length) {
            return -1
        }
        for (var i = index; i < this.length; i++) {
            element = this[i]
            if (element === value) {
                return i
            }
        }
    }
}

Arroz.prototype.shift = function () {
    var firstIndex = 0

    var first = this[firstIndex]

    delete this[firstIndex]

    this.lengt--

    return first
}

Arroz.prototype.filter = function(callback) {
    var reArroz = new Arroz()
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i]) === true)
            reArroz.push(this[i])
    }
    return reArroz
 }

 Arroz.prototype.find = function(callback) {
    var result = undefined
    for(var i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
           result =this[i]
           return result     
        }
    }
    return result
 }

 Arroz.prototype.findIndex = function(callback) {
    var result = -1
    for(var i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
        result = i
        return result
        }
    }
    return result
}

Arroz.prototype.includes = function(){
    if (arguments.length === 1){
        for (var i = 0; i < this.length; i++){
            if (this[i] === arguments[0])
            return true
        }
    } else {
        for (var i = arguments[1]; i < this.length; i++){
            if (this[i] === arguments[0])
            return true
        }
    }    
    return false
}
Arroz.prototype.forEach = function(callback){
    for(var i = 0; i < this.length; i++){
        var elem = this[i]

        callback(elem, i, this)
    }
}

Arroz.prototype.map = function (callback) {
    var mapped = new Arroz

    for (var i = 0; i < this.length; i++) {
        var elem = this[i]

        var mappedElement = callback(elem, i, this)

        mapped[mapped.length++] = mappedElement
    }

    return mapped
}

Arroz.from = function (arroz) {
    var instance = new Arroz

    for (var i = 0; i < arroz.length; i++) {
        var elem = arroz[i]

        instance[instance.length++] = elem
    }

    return instance
}
Arroz.prototype.with = function (index, value) {
    if (index >= this.length || index < -this.length) {
        throw new RangeError('Invalid index : ' + index)
    }if (index < 0) {
        index = this.length + index
    }
    var newArr = this
    newArr[index] = value
    return newArr
}

   

/*
Arroz.prototype.unshift = function (callback) {
   var firstIndex = 0
   var added = this[firstIndex]

    this.length++

    return added
   
   
}
*/
module.exports = Arroz
