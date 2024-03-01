function Arroz() {
    if(arguments.length !== 1) {
        this.length = arguments.length

        for(var i = 0; i < arguments.length; i++) {
          var argument = arguments[i]
          
          this[i] = argument
        }
    }else {
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
    var lastIndex = this.length -1

    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string= 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if( i < this.length - 1)
        string += ', '
    }
    
    string += ']'

    return string
}
/*
Arroz.prototype.some = function() {
    
    for(var i = 0; i < this.length; i++) {
        
       if(this[i] === true) {
        return true
       }
       
    }
    return false
}
*/
Arroz.prototype.at = function(index) {
    return this[ index > -1 ? index: index +this.length]
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
Arroz.prototype.every = function(callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if(element !== undefined) {
            if (callback(elemnent) === false)
            return false
        }
    }
    return true
}


module.exports = Arroz