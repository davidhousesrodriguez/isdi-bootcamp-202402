var matcha = require('./matcha')

var Arroz = require('./Arroz')

matcha.describe('Arroz', function () {
    matcha.describe('> construct', function () {
        matcha.it('should construct', function () {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with ONE NUMERIC value', function () {
            var a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)

            matcha.expect(a.length).toBe(5)
            for (var i = 0; i < a.length; i++) {
                matcha.expect(a[i]).toBe(undefined)
            }
        })
    })

    matcha.describe('> push', function () {
        matcha.it('should push a value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40, 50, 60, 70)

            matcha.expect(a.length).toBe(7)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(60)
            matcha.expect(a[6]).toBe(70)
            matcha.expect(length).toBe(7)
        })
    })

    matcha.describe('> pop', function () {
        matcha.it('should extract last value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.pop).toBe(true)

            var value = a.pop()

            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(undefined)
            matcha.expect(value).toBe(30)
        })
    })

    matcha.describe('> toString', function () {
        matcha.it('should convert to string', function () {
            var a = new Arroz(10, 20, 30, 40)

            matcha.expect(!!a.toString).toBe(true)

            var string = a.toString()

            matcha.expect(string).toBe('Arroz [10, 20, 30, 40]')
        })
    })

    matcha.describe('> at', function () {
        matcha.it('should return position of Arroz (positive index)', function () {
            var a = new Arroz(10, 20, 30, 40)

            matcha.expect(!!a.at).toBe(true)

            var atValue = a.at(2)

            matcha.expect(atValue).toBe(30)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })

        matcha.it('should return position of Arroz (negative index)', function () {

            var a = new Arroz(10, 20, 30, 40)
            var atValueMinus = a.at(-2)

            matcha.expect(atValueMinus).toBe(30)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })

        matcha.it('should return position of Arroz (OUT OF RANGE index)', function () {

            var a = new Arroz(10, 20, 30, 40)
            var atValueMinus = a.at(-70)

            matcha.expect(undefined).toBe(undefined)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })
    })

    matcha.describe('> concat', function () {
        matcha.it('should return concatenation of single value (string/number)', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.concat).toBe(true)

            a.concat('40')

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe('40')
            matcha.expect(a[4]).toBe(undefined)

            var a = new Arroz(10, 20, 30)

            a.concat(40)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)


        })

        matcha.it('should return concatenation of arrays', function () {

            var a = new Arroz(10, 20, 30)
            a.concat([40, 50])

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)

        })
    })

    matcha.describe('> every', function () {
        matcha.it('should return true if all elements meet condition HAPPY', function () {
            var a = new Arroz(10, 20, 30)
            matcha.expect(!!a.every).toBe(true)

            var result = a.every(function (x) {
                return x < 40
            })

            matcha.expect(result).toBe(true)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should return false if all elements meet condition UNHAPPY', function () {
            var a = new Arroz(10, 20, 30)

            var result = a.every(function (x) {
                return x < 20
            })

            matcha.expect(result).toBe(false)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })
    })
    matcha.describe('> includes', function () {
        matcha.it('should return true if at least 1 element meets condition HAPPY', function () {
            var a = new Arroz(10, 20, 30)
            matcha.expect(!!a.includes).toBe(true)

            var result = a.includes(function (x) {
                return x < 20
            })

            matcha.expect(result).toBe(true)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should return false if at least 1 element meets condition UNHAPPY', function () {
            var a = new Arroz(10, 20, 30)

            var result = a.includes(function (x) {
                return x < 5
            })

            matcha.expect(result).toBe(false)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })
    })

    matcha.describe('> indexOf', function () {
        matcha.it('should return index of item nearer to index 0', function () {
            var a = new Arroz(10, 30, 20, 30)
            matcha.expect(!!a.indexOf).toBe(true)

            var result = a.indexOf(30)

            matcha.expect(result).toBe(1)
        })

        matcha.it('should return index of item nearer to index that I input', function () {
            var a = new Arroz(10, 30, 20, 30)

            var result = a.indexOf(30, 1)

            matcha.expect(result).toBe(1)


            var a = new Arroz(10, 30, 20, 30)

            var result = a.indexOf(30, -1)

            matcha.expect(result).toBe(3)
        })

        matcha.it('should return -1 if input index is out of bounds UNHAPPY', function () {
            var a = new Arroz(10, 30, 20, 30)

            var result = a.indexOf(30, 7)

            matcha.expect(result).toBe(-1)


            var a = new Arroz(10, 30, 20, 30)

            var result = a.indexOf(30, -7)

            matcha.expect(result).toBe(-1)
        })
    })
    
    matcha.describe('> shift' , function () {
        matcha.it('should remove the first element', function() {
            var a = new Arroz (10, 20, 30, 40)

            matcha.expect(!!a.shift).toBe(true)

            var first = a.shift()

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[0]).toBe(undefined)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(first).toBe(10)
        })
    })

    matcha.describe('> filter', function(){
        matcha.it('should return Arroz with every matching element', function(){
            var newArroz = new Arroz(10, 20, 30)

            matcha.expect(!!newArroz.filter).toBe(true)

            var result = newArroz.filter(function (x){
                return x > 10
            })

            matcha.expect(result[0]).toBe(20)
            matcha.expect(result[1]).toBe(30)
            matcha.expect(result.length).toBe(2)
        })

        matcha.it('should return empty Arroz on no matches', function(){
            var newArroz = new Arroz(10, 20, 30)

            var result = newArroz.filter(function (x){
                return x > 30
            })

            matcha.expect(result.length).toBe(0)
        })
    })
    matcha.describe('find', function() {
        matcha.it('should return the first element in the Arroz that satisfies the given function', function () {
            var newArr = new Arroz (10, 20, 30)

            matcha.expect(!!newArr.find).toBe(true)

            var result = newArr.find(function (x) { return x > 11
            })
            matcha.expect(result).toBe(20)
        })
        matcha.it('should return undefined when no matches', function() {
            var newArr = new Arroz(10, 20, 30)

            var result = newArr.find(function (x) {
                return x > 30
            })
            matcha.expect(result).toBe(undefined)
        })
    })

    matcha.describe('>findIndex', function() {
        matcha.it('should return the first index in the Arroz wich satisfy the given function', function() {
            var newArr = new Arroz(10, 20, 30)

            matcha.expect(!!newArr.findIndex).toBe(true)

            var result = newArr.findIndex(function(x) {return x > 9
            })
        
        matcha.expect(result).toBe(0)
    })
        matcha.it('should return -1 if no matches', function() {
            var newArr = new Arroz(10, 20, 30)
            var result = newArr.findIndex(function(x){ return x > 30

            })
            matcha.expect(result).toBe(-1)
        })    
    })

    matcha.describe('>includes', function() {
        matcha.it('should return true if Arroz entry in in Arroz according to test', function() {
            var newArr = new Arroz(10, 20, 30)

            matcha.expect(!!newArr.includes).toBe(true)
            
            var result = newArr.includes(20)
            matcha.expect(result).toBe(true)
        })
        matcha.it('should return false if Arroz isnt into one of entries', function () {
            var newArra = new Arroz(10, 20, 30)
            var result = newArra.includes(40)
            matcha.expect(result).toBe(false)
        })
        matcha.it('should start from index if given one', function(){
            var newArroz = new Arroz(10, 20, 30)
            var result = newArroz.includes(20, 1)
            matcha.expect(result).toBe(true)
    })
})
    matcha.describe('>forEach', function () {
        matcha.it('should execute a provided function once for each element of Arroz')
        var result = new Arroz(10, 20, 30)
        var resultArroz = new Arroz()

        matcha.expect(!!result).toBe(true)
        result.forEach(function (x) {
            resultArroz.push(x * 2)
        })
        matcha.expect(resultArroz.length).toBe(3)
        matcha.expect(resultArroz[0]).toBe(20)
        matcha.expect(resultArroz[1]).toBe(40)
        matcha.expect(resultArroz[2]).toBe(60)
})

    
/*
    
    matcha.describe('>unshift', function () {
        matcha.it('should add specified elements at the begining of an array', function () {
            var a = new Arroz (10, 20, 30, 40)

            matcha.expect(!!a.unshift).toBe(true)

            var result= a.shift(1, 5, 9)

            matcha.expect(result.length). toBe(7)
            matcha.expect(result[0]).toBe(1)
            matcha.expect(result[1]).toBe(5)
            matcha.expect(result[2]).toBe(9)
            matcha.expect(result[3]).toBe(10)
            matcha.expect(result[4]).toBe(20)
            matcha.expect(result[5]).toBe(30)
            matcha.expect(result[6]).toBe(40)
            matcha.expect(result).toBe(0, 5, 9, 10, 20, 30, 40)
            
        })
    })
  
})
*/
})
